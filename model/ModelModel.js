const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Type = {
    activeFilters: {
        task: [String],
        library: [String],
        dataset: [String],
        language: [String],
        other: [String],
    },
    lastModified: String,
    lastModifiedInformation: String,
    name: String,
    author: String,
    avatar: String,
    downloads: Number,
    id: String,
    type: String,
    isPrivate: Boolean
}

const ModelModel = mongoose.model("modelDetail", new Schema(Type))
// 模型user 将会对应 users 集合, 
module.exports = ModelModel