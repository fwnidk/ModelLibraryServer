const ItemListService = require('../services/ItemListService')
const wrapper = require('../app/resultWrapper')
const ItemListController = {
    getList: async (req, res) => {
        // console.log('req.baseUrl: ', req.baseUrl);
        // console.log('req.query: ', req.query);
        let arr = req.baseUrl.split('/');
        let type = arr[arr.length - 1]
        const data = await ItemListService.getList(type,req.query)
        let wrapperData = wrapper(data)
        res.send(wrapperData)
    }
}
module.exports = ItemListController