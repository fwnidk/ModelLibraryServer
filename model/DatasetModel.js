const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {
    activeFilters: {
        task: [String],
        size: [String],
        language: [String],
        other: [String],
    }, //前端给
    lastModified: String, //后端获取当前时间
    lastModifiedInformation: String, //后端生成 "create ${name}"
    name: String, //前端给 √
    author: String, //前端给 √
    avatar: String, //前端给 √
    downloads: Number, //生成 0
    id: String, //后端自动生成
    type: String, //前端给 √
    isPrivate: Boolean //前端给 √
}

const DatasetModel = mongoose.model("datasetDetail", new Schema(UserType))
// 模型user 将会对应 users 集合, 
module.exports = DatasetModel