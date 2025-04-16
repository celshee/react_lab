import mongoose, { Schema, Document, model } from "mongoose";

// Step 1: Define the interface for the document
interface IPlanned extends Document {
  todolist: string;
}

// Step 2: Define the schema with correct typing
const todoSchema: Schema<IPlanned> = new Schema({
  todolist: { type: String, required: true },
});

// Step 3: Create the model using the interface
const Planned = model<IPlanned>('Planned', todoSchema);

// Step 4: Export
export default Planned;
