import { Router } from 'express';
import { usersRoute } from './users';

export const router = Router();

router.use('/users', usersRoute);
