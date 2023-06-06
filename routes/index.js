var express = require('express');
var router = express.Router();
var itemLabelRouter = require('./itemLabel')
var itemListRouter = require('./itemList')
var testRouter = require('./test')
var loginRouter = require('./login')

router.use('/modelLabel',itemLabelRouter)
router.use('/datasetLabel',itemLabelRouter)
router.use('/modelList',itemListRouter)
router.use('/datasetList',itemListRouter)
router.use('/test',testRouter)
router.use('/login',loginRouter)

module.exports = router;
