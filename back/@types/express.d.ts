import { TokenPayload } from '../src/utils';

declare global {
  declare namespace Express {
    interface Request {
      decodedToken?: TokenPayload;
    }
  }
}
