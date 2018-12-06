const createError = require('http-errors');
const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const shareRouter = require('./routes/share');
const uploadRouter = require('./routes/upload');
const lyricsRouter = require('./routes/lyrics');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect('mongodb://localhost/database_name', { useNewUrlParser: true });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`mongoose connected!`)
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/share', shareRouter);
app.use('/upload', uploadRouter);
app.use('/lyrics', lyricsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err);
  res.status(err.status || 500).json(err)
});

module.exports = app;