const JWT = require("../app/jwt");
const LoginService = require('../services/LoginService')
const LoginController = {
    login: async (req, res) => {
        const loginStatus = await LoginService.login(req.body)
        console.log('loginStatus: ', loginStatus.length);
        if (loginStatus.length === 0) {
            res.send({ code: 0, msg: '用户名或密码错误', data: '' })
            return;
        }
        const token = JWT.generate({
            username: req.body.username,
            password: req.body.password
        }, "1d")
        res.header("Authorization", token)
        res.send({ code: 1, msg: 'success', data: '' })
    }
}
module.exports = LoginController