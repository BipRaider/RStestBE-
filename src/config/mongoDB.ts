'use strict';

import mongoose from 'mongoose';

import env from './env.keys';

//Function for connection to database
const connectMongoDB = async (): Promise<any> => {
  try {
    const connectDB = await mongoose.connect(env.DATABASE_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: "${connectDB.connection.host}"`);
  } catch (error) {
    console.log('Not connect mongo db');
  }
};

export default connectMongoDB;
