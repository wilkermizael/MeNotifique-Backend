import { LogBookType } from "@/protocols";
import { logBookService } from '../services/logbook-service';
import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status';

export async function registerLogBook(
    req: Request, // Tipando o req.body corretamente
    res: Response,
    next: NextFunction
  ) {
    try {
      const infoLogBook:LogBookType = req.body
      const response = await logBookService.createBook(infoLogBook)
      res.status(httpStatus.CREATED).json({results:response});
    } catch (err) {
      next(err);
    }
  }


export async function getLogBook(
    req: Request<{"id":string}>,
    res: Response,
    next: NextFunction
) {
    const id = Number(req.params.id)

    try {
        const response = await logBookService.getLogBook(id);
        res.status(httpStatus.OK).json({ results: response });
    } catch (error) {
        next(error);
    }
}

export async function updateLogBook(
  req: Request<{"id":string}>, // Tipando o req.body corretamente
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.id)
  try {
    const infoLogBook:LogBookType = req.body
    const response = await logBookService.updateBook(infoLogBook, id)
    res.status(httpStatus.CREATED).json({results:response});
  } catch (err) {
    next(err);
  }
}

export async function deleteLogBook(
  req: Request<{"id":string}>, // Tipando o req.body corretamente
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.id)
  try {
    const response = await logBookService.deleteBook(id)
    res.status(httpStatus.CREATED).json({results:response});
  } catch (err) {
    next(err);
  }
}