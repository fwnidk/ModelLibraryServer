const ModelLabelModel = require("../model/ModelLabelModel")
const DatasetLabelModel = require("../model/DatasetLabelModel")
const ItemLabelService = {
    getLabel: (type) => {
        if (type === 'modelLabel') {
            return ModelLabelModel.find({}, ["label", "type"])
        }
        return DatasetLabelModel.find({}, ["label", "type"])
    }

}

module.exports = ItemLabelService