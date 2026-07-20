import express from "express"
import dotenv  from 'dotenv';
import connectDB from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PROT || 5000;

connectDB();

app.get("/", (req, res)=> {
    res.send("TaskFlow API is running!");
});

app.listen(PORT, ()=> {
    console.log(`Server running on the port ${PORT}`)
})