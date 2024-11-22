import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"
import User from './models/user.models.js';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

app.post('/create-user', async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const newUser = new User({ name, email, password, phoneNumber });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default app;