import { Router } from 'express';
import { usersRoute } from './users';
import { loginRoute } from './auth';
import { friendshipRoute } from './friendship';

export const router = Router();

router.use('/users', usersRoute);
router.use('/login', loginRoute);
router.use('/friendship', friendshipRoute);
