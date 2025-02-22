import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { ApplicationError, RequestError } from '@/protocols';

const handleApplicationErrors: ErrorRequestHandler = (
  err: RequestError | ApplicationError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => { 
  if (err.name === "DuplicatedUserError") { 
    res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
    return;
  }
  if(err.name === "NotFoundUser"){
    res.status(httpStatus.NOT_FOUND).send({
      message: err.message
    });
    return;
  }
  if(err.name === "CannotDelete"){
    res.status(httpStatus.NOT_FOUND).send({
      message: err.message
    })
    return;
  }
  if(err.name === "CannotFindStudentsError"){
    res.status(httpStatus.NOT_FOUND).send({
      message: err.message
    })
  }
  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
  return; 
};

export { handleApplicationErrors };
