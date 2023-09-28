const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true, 
    validate: {
      validator: function(text) {
        return text.length > 2;
      },
      message: "Empty name is not allowed"
    }
  }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
