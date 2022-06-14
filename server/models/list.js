const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The List title is required']
  },
  boardId: {
    type: Schema.Types.ObjectId,
    required: [true, 'The BoardId is required']
  },
  createdAt: {
    type: Schema.Types.Date,
  },
  updatedAt: {
    type: Schema.Types.Date,
  },
  position: {
    type: Schema.Types.Decimal128
  }
})

const List = mongoose.model('List', ListSchema);

module.exports = List;


/*

[ Board id]


[ 
  List id
   -> Board id links to above Board id
]


{
  "_id": 10,
  "title": "My list",
  "boardId": 1,
  "createdAt": "2020-10-06T23:40:26.606Z",
  "updatedAt": "2020-10-06T23:40:26.606Z",
  "position": 65535.0
}
*/