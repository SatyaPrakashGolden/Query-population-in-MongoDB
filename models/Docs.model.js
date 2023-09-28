const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    // required: true,
  },
  title: String,
  description: String,
  user: {
    // required: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});
const Docs = mongoose.model('Docs', UserSchema);
module.exports = Docs;
