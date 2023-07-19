const Router = require('express')
const ItemController = require('../controllers/ItemController')
const jwtVerification = require('../app/jwtVerification');

var router = Router();

/* GET home page. */
router.get('/', ItemController.getItem);

router.use(jwtVerification())
router.post('/', ItemController.postItem);

module.exports = router