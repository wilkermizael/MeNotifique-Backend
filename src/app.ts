import "express-async-errors";
import { Express, Request, Response, NextFunction } from "express";
import express = require("express");
import cors = require("cors");
import { connectDb, disconnectDB, loadEnv } from "./config";
import { attendanceRouter, bookRouter, classRouter, studentRouter, usersRouter } from "./routers";
import { handleApplicationErrors } from "./middlewares";
import * as path from "path";


loadEnv();
const app = express();
app
.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
})
.use(cors({
  origin: ["https://menotifique.winikii.com", "http://localhost:5173"],
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true
}))
.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
})
.use((req, res, next) => {
  console.log(`Recebida requisição ${req.method} para ${req.path}`);
  next();
})
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
