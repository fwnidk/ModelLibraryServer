const Router = require('express')
const PersonalInformationController = require('../controllers/PersonalInformationController')
const jwtVerification = require('../app/JWTVerification');
// const multer = require('multer')
// const upload = multer({ dest: 'public/images/' })

var router = Router();

/* GET home page. */
router.get('/', PersonalInformationController.getPersonalInformation);

module.exports = router