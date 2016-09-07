const Project = require('./../models/projectModel');
const User = require('./../models/userModel');

const projectController = {
  createProject: (req, res) => {
    User.find({ _id: req.cookies.ssid }, (err, foundUser) => {
      if (err) throw err;
      var project = new Project(req.body);
      foundUser[0].children.push(project);
      foundUser[0].save((error, result) => {
        if (error) console.log(error);
        res.send(result);
      });
    });
  },
};


module.exports = projectController;
