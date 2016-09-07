const mongoose = require('mongoose');
const ProjectSchema = require('./projectModel').schema;

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  children: [ProjectSchema],
});

module.exports = mongoose.model('User', UserSchema);