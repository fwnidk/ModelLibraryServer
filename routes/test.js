const Router = require('express')
const TestController = require('../controllers/TestController')
const jwtVerification = require('../app/jwtVerification');

var router = Router();

/* GET home page. */
router.use(jwtVerification())
router.get('/', TestController.getList);

module.exports = router