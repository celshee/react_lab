import mongoose, { Schema, Document, model } from "mongoose";

// Step 1: Define a TypeScript interface for the document
interface ICompleted extends Document {
  completedlist: string;
}

// Step 2: Define the schema with the correct typing
const completedSchema: Schema<ICompleted> = new Schema({
  completedlist: { type: String, required: true },
});

// Step 3: Create the model with explicit type
const Completed = model<ICompleted>('Completed', completedSchema);

// Step 4: Export it
export default Completed;
