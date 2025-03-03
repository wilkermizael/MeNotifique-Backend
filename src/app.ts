import "express-async-errors";
import { Express,Request, Response } from "express";
import express = require("express");
import cors = require("cors");
import { connectDb, disconnectDB, loadEnv } from "./config";
import { attendanceRouter, bookRouter, classRouter, studentRouter, usersRouter } from "./routers";
import { handleApplicationErrors } from "./middlewares";
import * as path from "path";


loadEnv();
const app = express();
app
.use(
  cors({
    origin: ["https://apimenotifique.winikii.com", "http://localhost:5173"], // Permita chamadas do frontend local e do domínio online
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Permite cookies e autenticação
  })
)
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
