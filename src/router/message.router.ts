'use strict';

import * as express from 'express';

import { addMessage, getAllMessages } from '../controllers/message.controller';
import { validateAddMessage } from '../validators/message.validator';

//Create router for our controllers
const messageRouter: express.Router = express.Router();

//Declare routers for http requests
messageRouter.post('/', validateAddMessage, addMessage);
messageRouter.get('/', getAllMessages);

export default messageRouter;
