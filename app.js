var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var apiRouter = require('./routes/index');
var app = express();
var history = require('connect-history-api-fallback'); //这个是重点

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);
app.use(history());  //使用history   最好放到pubic静态目录前
app.use(express.static(path.join(__dirname, 'build')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err })
});

module.exports = app;
