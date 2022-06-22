import { tokenExtractor } from '../middlewares';
import { addFriend, changeFriendshipStatus } from '../controllers/friendship';
import { Router } from 'express';

export const friendshipRoute = Router();

friendshipRoute.post('/', tokenExtractor, addFriend);
friendshipRoute.put('/', tokenExtractor, changeFriendshipStatus);
