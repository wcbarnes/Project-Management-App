const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./database/controller/userController');
const cookieController = require('./database/controller/cookieController');
const sessionController = require('./database/controller/sessionController');
const projectController = require('./database/controller/projectController');
const taskController = require('./database/controller/taskController');


mongoose.connect('mongodb://localhost/projectmanagement');
mongoose.connection.once('open', () => {
  console.log('Connected to projectmanagement');
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/')));

app.post('/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession
);

app.post('/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession
);

app.get('/projects',
  userController.findUser
);

app.post('/projects',
  projectController.createProject
);

app.post('/tasks',
  taskController.createTask
);




app.listen(3000, console.log('listening on 3000'));
