const UserModel = require("../model/UserModel")

const RegisterService = {
    verifyUsername: async (body) => {
        let registerInfo = await UserModel.find({ username: body.username });
        return registerInfo
    },
    submitUserInfo: async (body, filepath) => {
        let createItem = { username: body.username, password: body.password, team: body.team, avatar: filepath }
        let newUser = new UserModel(createItem)
        let registerInfo = await newUser.save();
        console.log('registerInfo: ', registerInfo);
        return registerInfo
    }
}

module.exports = RegisterService