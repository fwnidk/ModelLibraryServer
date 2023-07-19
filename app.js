var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var apiRouter = require('./routes/index');
var app = express();
var history = require('connect-history-api-fallback'); //这个是重点
const fs = require ('fs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);
app.use('/images', (req, res, next) => {
    const fileName = req.path;
    const filePath = path.join(__dirname, 'public/images', fileName);
    console.log('图片请求处理',filePath)
    // 检查文件是否存在
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.log('图片请求处理err');
        // 文件不存在，继续传递请求
        next();
      } else {
        console.log('图片请求处理正常');
        // 文件存在，重定向到静态资源
        res.sendFile(filePath);
      }
    });
  });
app.use(history());  //使用history   最好放到pubic静态目录前
// console.log(path.join('F:\\研究生学习\\编程学习\\my_projects\\model_library_ts\\build'));
app.use(express.static(path.join('F:\\研究生学习\\编程学习\\my_projects\\model_library_ts\\build')));
app.use(express.static(path.join(__dirname, 'public')));

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
