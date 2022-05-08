import { NextFunction, Request, Response } from 'express';

export interface Router {
  res: Response;
  req: Request;
  next: NextFunction;
  error: Error;
}
