import { Router } from 'express';
import { usersRoute } from './users';
import { loginRoute } from './auth';

export const router = Router();

router.use('/users', usersRoute);
router.use('/login', loginRoute);
