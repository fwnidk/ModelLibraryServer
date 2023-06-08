const PersonalInformationModel = require("../model/UserModel")

const PersonalInformationService = {
    getPersonalInformation: async (username) => {
        let PersonalInformation = await PersonalInformationModel.find({username});
        return PersonalInformation
    }
}

module.exports = PersonalInformationService