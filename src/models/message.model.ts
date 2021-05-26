'use strict';

import mongoose, { Schema } from 'mongoose';

const MessageSchema: Schema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  data: { type: Date, default: Date.now() },
});

const MessageModel = mongoose.model('Message', MessageSchema);

export default MessageModel;
