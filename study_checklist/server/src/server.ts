import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import db_connect from './config/db';
import completed from './models/completed';
import planned from './models/planned';

const app: Application = express();
const port = 3000;

db_connect();

app.use(cors());
app.use(express.json());

// Async function handler wrapper (error handling included)
const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Route Handlers
const addTopic = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { todolist } = req.body;
    const newTopic = new planned({ todolist });
    const saved = await newTopic.save();
    return res.status(201).json(saved);
  } catch (err) {
    return res.status(500).json({ error: 'Error adding topic' });
  }
};

const markCompleted = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.body;
    const topic = await planned.findById(id);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const completedTopic = new completed({ completedlist: topic.todolist });
    await completedTopic.save();
    await planned.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Topic moved to completed' });
  } catch (err) {
    return res.status(500).json({ error: 'Error completing topic' });
  }
};

const getPlanned = async (_req: Request, res: Response): Promise<Response> => {
  const topics = await planned.find();
  return res.json(topics);
};

const getCompleted = async (_req: Request, res: Response): Promise<Response> => {
  const topics = await completed.find();
  return res.json(topics);
};

// Routes using asyncHandler for correct error propagation
app.post('/planned', asyncHandler(addTopic));
app.post('/complete', asyncHandler(markCompleted));
app.get('/planned', asyncHandler(getPlanned));
app.get('/completed', asyncHandler(getCompleted));

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}`);
});
