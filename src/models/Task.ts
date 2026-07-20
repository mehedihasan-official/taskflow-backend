import mongoose, { Schema } from "mongoose";


export interface ITask extends Document {
    title: string;
    completed: boolean;
    createdAt: Date;
}

const taskSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model<ITask>("Task", taskSchema);
export default Task;