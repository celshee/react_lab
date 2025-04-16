import express, { Request, Response } from 'express';
import db_connect from './config/db';
import completed from './models/completed';
import planned from './models/planned';
import cors from 'cors';

const app = express();
const port = 3000;

db_connect();

app.use(cors());
// Must add express.json() middleware
app.use(express.json());

// Add a topic to the study checklist
app.post('/planned', async (req: Request, res: Response) => {
  try {
    const { todolist } = req.body;
    const newTopic = new planned({ todolist });
    const saved = await newTopic.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error adding topic' });
  }
});

// Mark a topic as completed (move from planned to completed)
app.post('/complete', async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const topic = await planned.findById(id);
    if (!topic) return res.status(404).json({ error: 'Topic not found' });

    const completedTopic = new completed({ completedlist: topic.todolist });
    await completedTopic.save();
    await planned.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Topic moved to completed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error completing topic' });
  }
});

// Get all planned topics
app.get('/planned', async (_req: Request, res: Response) => {
  const topics = await planned.find();
  return res.json(topics);
});

// Get all completed topics
app.get('/completed', async (_req: Request, res: Response) => {
  const topics = await completed.find();
  return res.json(topics);
});


app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}`);
});
