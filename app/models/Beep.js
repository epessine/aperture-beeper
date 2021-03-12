const mongoose = require('mongoose');
const { Schema } = mongoose;

const beepSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('beeps', beepSchema);