const Router = require('express')
const ItemLabelController = require('../controllers/ItemLabelController');
var router = Router();

/* GET home page. */
router.get('/', ItemLabelController.getLabel);

module.exports = router
