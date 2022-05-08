import { Router } from '../models';

export const unknownEndpoint = ({ res }: Router) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandler = ({ error, res, next }: Router) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  } else if (error.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'Token expired' });
  }

  next(error);
};
