import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express()

console.log(process.env.CORS_ORIGIN);

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js";

app.use("/users", userRouter);

export default app;