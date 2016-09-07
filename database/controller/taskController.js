const Project = require('./../models/projectModel');
const User = require('./../models/userModel');
const Task = require('./../models/taskModel');

const taskController = {
  createTask: (req, res) => {
    User.find({ _id: req.cookies.ssid }, (err, found) => {
      console.log(found);
      var doc = found[0].children.id(req.body.projectID);
      console.log('doc', doc);
      doc.children.push(new Task({ task: req.body.task }));
      found[0].save((error, result) => {
        if (error) console.log(error);
        res.send(result);
      });
    });
  },
};


module.exports = taskController;
