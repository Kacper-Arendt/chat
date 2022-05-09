import { Request, Response, NextFunction } from 'express';
import { TokenPayload, validateToken } from '../utils';

interface RequestData extends Request {
  decodedToken?: TokenPayload;
}

export const tokenExtractor = async (req: RequestData, res: Response, next: NextFunction) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    try {
      req.decodedToken = await validateToken(authorization.substring(7));
    } catch {
      res.status(401).json({ error: 'token invalid' });
    }
  } else {
    res.status(401).json({ error: 'token missing' });
  }
  next();
};
