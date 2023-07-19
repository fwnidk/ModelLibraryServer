const PersonalInformationService = require('../services/PersonalInformationService')
const JWT = require("../app/jwt");
const TestController = {
    getPersonalInformation: async (req, res) => {
        // console.log('jwtVerification');
        // let urlArr = req.baseUrl.split('/')
        // let currURL = urlArr[urlArr.length - 1]
        // console.log('currURL: ', currURL);
        const token = req.headers["authorization"]?.split(" ")[1]
        // console.log('token: ', token);
        if (token) {
            const payload = JWT.verify(token)
            // console.log('payload: ', payload);
            if (payload) {
                //重新计算token过期时间
                const newToken = JWT.generate({
                    _id: payload._id,
                    username: payload.username
                }, "1d")
                res.header("Authorization", newToken)
                const rawData = await PersonalInformationService.getPersonalInformation(payload.username)
                let data = {
                    username: rawData[0].get('username'),
                    team: rawData[0].get('team'),
                    avatar: rawData[0].get('avatar'),
                }
                res.send({ code: 1, msg: "success", data });
                return;
            }
        }
        res.send({ code: 0, msg: "no login", data: null })
    }
}
module.exports = TestController