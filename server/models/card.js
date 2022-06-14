const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Card title is required']
  },
  description: {
    type: String
  },
  labels: [
    {
      type: String
    }
  ],
  listId: {
    type: Schema.Types.ObjectId,
    required: [true, 'The ListId is required']
  },
  position: {
    type: Schema.Types.Decimal128
  },
  archived: {
    type: Boolean,
  },
  createdAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  updatedAt: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  dueDate: {
    type: Schema.Types.Date,
  },
  completed: {
    type: Boolean,
  },
  boardId: {
    type: Schema.Types.ObjectId,
  },
  comments: [
    {
      type: String
    }
  ],
  actions: {
    type: Array,
  },
  commentsCount: {
    type: Schema.Types.Int32
  }
})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;


/*
{
  "_id": 9,
  "title": "My new card",
  "description": "",
  "labels": [],
  "listId": 13,
  "position": 65535.0,
  "archived": false,
  "createdAt": "2020-10-08T17:54:55.285Z",
  "updatedAt": "2020-10-08T17:54:55.285Z",
  "dueDate": null,
  "completed": false,
  "boardId": 1,
  "comments": [],
  "actions": []
  "commentsCount": 0
}
*/