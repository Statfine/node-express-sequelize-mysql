/*
 * @Description: 
 * @Author: shaojia
 * @Date: 2020-03-13 22:55:02
 * @LastEditTime: 2020-03-13 23:34:12
 * @LastEditors: shaojia
 */
var express = require('express');
var router = express.Router();
var userDao  = require('../controllers/user');

/**
 * 注册
*/
router.post('/reg', function(req, res, next) {
  userDao.reg(req, res, next)
});

/**
 * 检测邮箱
*/
router.get('/checkEmail', function(req, res, next) {
  userDao.checkEmail(req, res, next)
});

module.exports = router;