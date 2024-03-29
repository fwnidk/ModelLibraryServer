var express = require('express');
var router = express.Router();
var itemLabelRouter = require('./itemLabel')
var itemListRouter = require('./itemList')
var testRouter = require('./test')
var loginRouter = require('./login')
var registerRouter = require('./register')
var personalInformationRouter = require('./personalInformation')
var itemRouter = require('./item')

router.use('/modelLabel',itemLabelRouter)
router.use('/datasetLabel',itemLabelRouter)
router.use('/modelList',itemListRouter)
router.use('/datasetList',itemListRouter)
router.use('/test',testRouter)
router.use('/login',loginRouter)
router.use('/register',registerRouter)
router.use('/personalInformation',personalInformationRouter)
router.use('/model',itemRouter)
router.use('/dataset',itemRouter)

module.exports = router;
