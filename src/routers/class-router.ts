
import { Router } from "express";
import { createClassController, deleteClassController, findClassController, updateClassController } from "@/controllers";

const classRouter = Router();

classRouter.post("/", createClassController);
classRouter.get("/", findClassController); 
classRouter.get("/:id", findClassController);
classRouter.put("/:id",updateClassController)
classRouter.delete("/:id", deleteClassController)

export { classRouter };
