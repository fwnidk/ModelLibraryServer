const wrapper = (data, code = 0, msg = "no login",) => {
    return { code, msg, data }
}
module.exports = wrapper