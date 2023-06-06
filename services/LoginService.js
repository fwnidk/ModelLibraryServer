const LoginModel = require("../model/LoginModel")

const LoginService = {
    login: async (body) => {
        console.log(body.username, body.password);
        let loginInfo = await LoginModel.find({ username: body.username, password: body.password });
        return loginInfo
    }
}

module.exports = LoginService