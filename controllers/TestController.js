const TestController = {
    getList: (req, res) => {
        console.log('req.query: ', req.query);
        res.send({ code: 1, msg: 'success', data: '123123' })
    }
}
module.exports = TestController