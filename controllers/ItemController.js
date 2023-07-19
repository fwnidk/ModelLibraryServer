const ItemService = require('../services/ItemService')
const wrapper = require('../app/resultWrapper')
const ItemController = {
    getItem: async (req, res) => {
        // console.log('req.baseUrl: ', req.baseUrl);
        // console.log('req.query: ', req.query);
        let arr = req.baseUrl.split('/');
        let type = arr[arr.length - 1]
        const data = await ItemService.get(type, req.query.name)
        let wrapperData;
        if (data.length === 0) {
            wrapperData = wrapper(null, 0, "no such item")
        } else {
            wrapperData = wrapper(data[0])
        }
        res.send(wrapperData)
    },
    postItem: async (req, res) => {
        // console.log('req.baseUrl: ', req.baseUrl);
        // console.log('req.body: ', req.body);
        let arr = req.baseUrl.split('/');
        let type = arr[arr.length - 1]
        let postData = {
            lastModified: new Date().toISOString(),
            lastModifiedInformation: `create ${req.body.name}`,
            downloads: 0,
            ...req.body,
        };
        console.log(postData);
        const getDataByName = await ItemService.get(type, req.body.name)
        console.log('getDataByName: ', getDataByName);
        if (getDataByName.length === 0) {
            const data = await ItemService.post(type, postData)
            let wrapperData = wrapper(data)
            res.send(wrapperData)
        } else {
            //有重复名字不增加数据，返回重复信息
            res.send(wrapper(null, 0, "item already exists"))
        }
    }
}
module.exports = ItemController