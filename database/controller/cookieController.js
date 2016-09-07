const User = require('./../models/userModel');
const sessionController = require('./sessionController');

const cookieController = {
  setSSIDCookie: (req, res, next) => {
    User.find({ userName: req.body.userName }, (err, foundUser) => {
      if (err) throw err;
      if (foundUser[0]) {
        var userId = foundUser[0]['_id'];
        res.cookie('ssid', userId);
        res.ssid = userId;
        next();
      }
    });
  },
};


module.exports = cookieController;
