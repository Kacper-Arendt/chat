import { Router } from 'express';
import { createUser, getUser, getUsers } from '../controllers/users';
import { tokenExtractor } from '../middlewares';

export const usersRoute = Router();

usersRoute.get('/admin', tokenExtractor, getUsers);
usersRoute.get('/', tokenExtractor, getUser);
usersRoute.post('/', createUser);
