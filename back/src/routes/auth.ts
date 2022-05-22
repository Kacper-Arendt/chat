import { Router } from 'express';
import { login } from '../controllers/auth';

export const loginRoute = Router();

loginRoute.post('/', login);
