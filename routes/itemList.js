
const Router = require('express')
const ItemListController = require('../controllers/ItemListController');
var router = Router();

/* GET home page. */
router.get('/', ItemListController.getList);

module.exports = router
