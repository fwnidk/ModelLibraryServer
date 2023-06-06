
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {

}

const DatasetLabelModel = mongoose.model("datasetLabel",new Schema())
// 模型user 将会对应 users 集合, 
module.exports = DatasetLabelModel