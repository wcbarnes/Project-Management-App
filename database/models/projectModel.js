const mongoose = require('mongoose');
const TaskSchema = require('./taskModel').schema;

const ProjectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  children: [TaskSchema],
});


module.exports = mongoose.model('Project', ProjectSchema);
