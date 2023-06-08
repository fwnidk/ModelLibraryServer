const Router = require('express')
const RegisterController = require('../controllers/RegisterController')
const multer = require('multer')
const upload = multer({ dest: 'public/images/' })
var router = Router();

/* GET home page. */
router.post('/verifyUsername', RegisterController.verifyUsername);
router.post('/submitUserInfo', upload.single("avatar"), RegisterController.submitUserInfo);

module.exports = router