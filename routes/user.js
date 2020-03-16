/*
 * @Description: 
 * @Author: shaojia
 * @Date: 2020-03-13 22:55:02
 * @LastEditTime: 2020-03-16 22:37:29
 * @LastEditors: shaojia
 */
var express = require('express');
var router = express.Router();
var userDao  = require('../controllers/user');
var checkToken = require('../middlewares/check').checkToken;

/**
 * 注册
*/
router.post('/reg', function(req, res, next) {
  userDao.reg(req, res, next)
});

/**
 * 登录
*/
router.post('/login', function(req, res, next) {
  userDao.login(req, res, next)
});

/**
 * 退出
*/
router.post('/logout', function(req, res, next) {
  userDao.logout(req, res, next)
});

/**
 * 检测邮箱
*/
router.get('/checkEmail', function(req, res, next) {
  userDao.checkEmail(req, res, next)
});

/**
 * 检测邮箱
*/
router.get('/info', checkToken, function(req, res, next) {
  userDao.getUserInfo(req, res, next)
});

module.exports = router;