'use strict';

import { Request, Response, NextFunction } from 'express';

import Joi from 'joi';

import ErrorResponse from '../utils/errorResponse';

export const validateAddMessage = (req: Request, res: Response, next: NextFunction) => {
  const rules: Joi.ObjectSchema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    message: Joi.string().min(3).max(450).required(),
  });

  const result: Joi.ValidationResult = rules.validate(req.body);

  if (result.error) {
    next(new ErrorResponse('Invalid name or message', 401));
  }

  next();
};
