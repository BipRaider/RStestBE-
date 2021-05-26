'use strict';

import { NextFunction, Request, Response } from 'express';

import MessageModel from '../models/message.model';

//POST:
//Adding  user and message  in our database
export const addMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> => {
  const { name, message } = req.body;

  try {
    const currentMessage = await MessageModel.create({ name, message });

    return res.status(201).json(currentMessage);
  } catch (err) {
    next(err);
  }
};

//GET:
//Receiving all messages from users
export const getAllMessages = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> => {
  try {
    const messages = await MessageModel.find().sort({ data: -1 });

    return res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
};
