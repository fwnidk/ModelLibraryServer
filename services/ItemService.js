const ModelListModel = require("../model/ModelListModel")
const DatasetListModel = require("../model/DatasetListModel")
const ItemService = {
    get: (type, name) => {
        if (type === 'model') {
            return ModelListModel.find({ name: name });
        }
        return DatasetListModel.find({ name: name });
    },
    post: async (type, postData) => {
        let newItem;
        if (type === 'model') {
            newItem = new ModelListModel(postData);
        } else {
            newItem = new DatasetListModel(postData);
        }
        await newItem.save();
        return;
    }
}

module.exports = ItemService