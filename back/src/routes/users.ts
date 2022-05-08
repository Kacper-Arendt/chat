import { Router } from 'express';
import { createUser, getUsers } from '../controllers/users';

export const usersRoute = Router();

usersRoute.get('/', getUsers);
usersRoute.post('/', createUser);
