import { Secret, sign, SignOptions, verify } from 'jsonwebtoken';
import { SECRET } from '../config';

interface PayloadData {
  id: number;
  email: string;
  accessTypes?: string[];
}

export function generateToken(payload: PayloadData) {
  const signInOptions: SignOptions = { expiresIn: '2h' };

  if (SECRET) return sign(payload, SECRET, signInOptions);
}

export interface TokenPayload extends PayloadData {
  exp: number;
}

export async function validateToken(token: string): Promise<TokenPayload | any> {
  if (token) {
    try {
      return verify(token, SECRET as Secret, (err, decoded) => {
        return decoded as TokenPayload;
      });
    } catch (e) {
      console.log(e);
    }
  }
}
