/*
 * @Description: 主入口启动文件
 * @Author: shaojia
 * @Date: 2020-03-12 22:38:45
 * @LastEditTime: 2020-03-13 23:28:11
 * @LastEditors: shaojia
 */

var express = require('express'); //web 框架
var logger = require('morgan'); //开发模式下log
var bodyParser = require('body-parser'); //json
var path = require('path'); //路径
var config = require('config-lite'); //读取配置文件
var winston = require('winston'); //日志
var expressWinston = require('express-winston'); //基于 winston 的用于 express 的日志中间件
var models = require('./models'); //临时添加 为了生成数据库表，后面写到Controllers里面  
var routes = require('./routes'); //路由

//实例化express
var app = express();

// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');

// log
app.use(logger('dev'));

//设置json
//格式化JSON的输出
app.set('json spaces', 2);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public'))); //注意：中间件的加载顺序很重要。如上面设置静态文件目录的中间件应该放到 routes(app) 之前加载，这样静态文件的请求就不会落到业务逻辑的路由里；

// 路由
routes(app);

//错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/error.log'
    })
  ]
}));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app
module.exports = app;