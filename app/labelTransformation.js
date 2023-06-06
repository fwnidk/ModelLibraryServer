const labelTransformation = (data) => {
    let res = {}
    for (let currData of data) {
        if (res[currData.get("type")] === undefined) {
            res[currData.get("type")] = [currData.get("label")]
        } else {
            res[currData.get("type")].push(currData.get("label"))
        }
    };
    return res
}
module.exports = labelTransformation