'use strict';
import env from './config/env.keys';
import express from 'express';
import logger from 'morgan';
// Security
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';

//DataBase
import connectMongoDB from './config/mongoDB';

//Router
import router from './router';

//Error handler
import errorHandler from './middleware/errorHandler';

//Create express server
const app: express.Application = express();

//Connection  database mongo
connectMongoDB();

// If development mode in console is not writing messages about logs
if (env.NODE_ENV === 'dev') {
  app.use(logger('dev'));
}

//Express body parser
app.use(express.urlencoded());
app.use(express.json());

//For data protection
app.use(mongoSanitize());
app.use(helmet());

// Used for limit repeated requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(hpp());
app.use(cors({ origin: '*' }));

//Adding routers to express server
router(app);

//Middleware  for handling errors
app.use(errorHandler);

//Start server
const server = app.listen(env.PORT || 3001, (): void => {
  console.log(`Server started on port: ${env.PORT}`);
});

// Close server & exit process
process.on('unhandledRejection', (err: Error) => {
  console.log(`Error: ${err.message}`);

  server.close(() => process.exit(1));
});
