/*
 * @Description: 检查中间件
 * @Author: shaojia
 * @Date: 2020-03-16 21:50:06
 * @LastEditTime: 2020-03-16 21:52:41
 * @LastEditors: shaojia
 */
var tokenService = require('../services/token.js');

module.exports = {
  /**
	 * 检验普通用户token
	 */
  checkToken: function(req, res, next){
    tokenService.verifyRouterToken(req, res, next);
  },
  /**
	 * 检验管理员token
	 */
  checkAdminToken: function(req, res, next) {
    tokenService.verifyRouterToken(req, res, next, true);
  },
}
