
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {
}

const ModelLabelModel = mongoose.model("modelLabel",new Schema(UserType))
// 模型user 将会对应 users 集合, 
module.exports = ModelLabelModel