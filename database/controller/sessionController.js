const Session = require('./../models/sessionModel');

const sessionController = {
  startSession: (req, res) => {
    var newSession = new Session({ cookieId: res.ssid });
    Session.create(newSession, (err) => {
      if (err) throw err;
      else {
        console.log(newSession);
        res.sendStatus(200);
      }
    });
  },
};


module.exports = sessionController;
