const Router = require('express')
const LoginController = require('../controllers/LoginController')

var router = Router();

/* GET home page. */
router.post('/', LoginController.login);

module.exports = router