var config = require('config-lite'); // 引入灵活配置文件
var Sequelize = require('sequelize'); // 引入Sequelize

var Mysql = new Sequelize(
  config.mysql.database, config.mysql.user, config.mysql.password,
  {
    host: config.mysql.host, // 数据库服务器ip
    dialect: 'mysql', // 数据库使用mysql
    port: 3306, // 数据库服务器端口
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    },
  }
);

module.exports = Mysql;