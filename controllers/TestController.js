const TestController = {
    getList: (req, res) => {
        res.send({ code: 1, msg: 'success', data: '123123' })
    }
}
module.exports = TestController