const JWT = require("../app/jwt");
const RegisterService = require('../services/RegisterService')

const RegisterController = {
    verifyUsername: async (req, res) => {
        const registerVerifyUsername = await RegisterService.verifyUsername(req.body)
        console.log('register verify username: ', registerVerifyUsername.length);
        if (registerVerifyUsername.length !== 0) {
            res.send({ code: 0, msg: 'user name registered', data: '' })
            return;
        }
        res.send({ code: 1, msg: 'verification successful', data: '' })
    },
    submitUserInfo: async (req, res) => {
        // public\\images\\6b2567e9642333ac07f35552d5a8d403
        // /images/6b2567e9642333ac07f35552d5a8d403
        let filepath = req.file? `/images/${req.file.filename}` :'/images/defaultAvatar.jpg'
        await RegisterService.submitUserInfo(req.body, filepath)
        const token = JWT.generate({
            username: req.body.username,
            password: req.body.password
        }, "1d")
        res.header("Authorization", token)
        res.send({ code: 1, msg: 'registration completed', data: '' })
    }
}
module.exports = RegisterController