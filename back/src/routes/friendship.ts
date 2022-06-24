import { tokenExtractor } from '../middlewares';
import { addFriend, changeFriendshipStatus, getAllUserFriendships } from '../controllers/friendship';
import { Router } from 'express';

export const friendshipRoute = Router();

friendshipRoute.post('/', tokenExtractor, addFriend);
friendshipRoute.put('/', tokenExtractor, changeFriendshipStatus);
friendshipRoute.get('/', tokenExtractor, getAllUserFriendships);
