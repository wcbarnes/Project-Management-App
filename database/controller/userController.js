const User = require('./../models/userModel');
const cookieController = require('./../controller/cookieController');
const sessionController = require('./../controller/sessionController');


const userController = {
  verifyUser: (req, res, next) => {
    User.find({ userName: req.body.userName }, (err, foundUser) => {
      if (!foundUser[0]) {
      } else if (req.body.password === foundUser[0].password) {
        next();
      }
    });
  },

  createUser: (req, res, next) => {
    if (req.body.userName && req.body.password) {
      var user = new User(req.body);
      User.create(user, (err) => {
        if (err) console.log(err);
        else next();
      });
    }
  },

  findUser: (req, res) => {
    User.find({ _id: req.cookies.ssid }, (err, foundUser) => {
      if (err) throw err;
      res.send(foundUser);
    });
  },
};

module.exports = userController;
