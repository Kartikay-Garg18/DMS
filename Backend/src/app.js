import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express()

const corsOptions = {
  origin: 'https://daan-dusky.vercel.app', // Allow your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js";

app.use("/", userRouter);

export default app;
