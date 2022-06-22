import { tokenExtractor } from '../middlewares';
import { addFriend } from '../controllers/friendship';
import { Router } from 'express';

export const friendshipRoute = Router();

friendshipRoute.post('/', tokenExtractor, addFriend);
