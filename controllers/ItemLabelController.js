const ItemLabelService = require('../services/ItemLabelService')
const wrapper = require('../app/resultWrapper')
const labelTransformation = require('../app/labelTransformation')
const ItemLabelController = {
    getLabel: async (req, res) => {
        let arr = req.baseUrl.split('/');
        let type = arr[arr.length - 1]
        const data = await ItemLabelService.getLabel(type)
        let wrapperData = wrapper(labelTransformation(data))
        res.send(wrapperData)
    }
}
module.exports = ItemLabelController