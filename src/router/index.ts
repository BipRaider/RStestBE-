'use strict';

import * as express from 'express';

import message from './message.router';

export default (app: express.Application): void => {
  app.use('/message', message);
};
