const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true,
    minLength:1
  },
  address:{
    type: String,
    required: true,
    trim: true,
    minLength:1
  },
  phoneNumber:{
    type: String,
    required: true,
    trim: true,
    minLength:10
  },
  workTime:{
    type: String,
    required: true,
    trim: true,
    minLength:1
  },
  goods:{
    type: String,
    required: true,
    trim: true,
    minLength:1
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Location', schema);
