const ModelListModel = require("../model/ModelListModel")
const DatasetListModel = require("../model/DatasetListModel")
const ItemListService = {
    getList: async (type, query) => {
        let sortType = query.sortType === "most-downloads" ? "downloads" : "lastModified"
        let pageSkip = query.pageIndex === undefined ? 0 : (query.pageIndex - 1) * 30
        if (type === 'modelList') {
            let modelList = await ModelListModel.find({}).sort({ [sortType]: -1 }).skip(pageSkip).limit(30).exec();
            let numTotalItems = await ModelListModel.find({}).count(true).exec()
            return {
                modelList,
                numTotalItems
            }
        }
        let datasetList = await DatasetListModel.find({}).sort({ [sortType]: -1 }).skip(pageSkip).limit(30).exec();
        let numTotalItems = await DatasetListModel.find({}).count(true).exec()
        return {
            datasetList,
            numTotalItems
        }
    }
}

module.exports = ItemListService