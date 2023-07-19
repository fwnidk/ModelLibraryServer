const JWT = require("./jwt");

const jwtVerification = () => {
    return (req, res, next) => {
        // console.log('jwtVerification');
        // let urlArr = req.baseUrl.split('/')
        // let currURL = urlArr[urlArr.length - 1]
        // console.log('currURL: ', currURL);
        const token = req.headers["authorization"]?.split(" ")[1]
        console.log('token: ', token);
        if (token) {
            const payload = JWT.verify(token)
            console.log('payload: ', payload);
            if (payload) {
                //重新计算token过期时间
                const newToken = JWT.generate({
                    _id: payload._id,
                    username: payload.username
                }, "1d")
                res.header("Authorization", newToken)
                next()
                return;
            }
        }
        res.status(401).send({ code: 0, msg: "token过期", data: null })
    }
}
module.exports = jwtVerification