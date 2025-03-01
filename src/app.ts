import "express-async-errors";
import express, { Express,Request, Response } from "express";
import cors from "cors";
import { connectDb, disconnectDB, loadEnv } from "./config";
import { attendanceRouter, bookRouter, classRouter, studentRouter, usersRouter } from "./routers";
import { handleApplicationErrors } from "./middlewares";
import path from 'path';


loadEnv();
const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req: Request, res:Response) => {res.send("I'm OK demais!")})
  .use("/users", usersRouter)
  .use("/class", classRouter)
  .use("/student",studentRouter)
  .use('/attendance', attendanceRouter)
  .use('/logbook', bookRouter)
  .use(handleApplicationErrors)
  .use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
  

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
