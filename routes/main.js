const path = require('path')
const express = require('express')

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const mainController = require('../controllers/main')

const router = express.Router();

router.get('/', mainController.getIndex)

router.get('/category/:category', mainController.getCategory)

router.get('/add-supplier', mainController.getAddSupplier)

router.post('/add-supplier', urlencodedParser, mainController.postAddSupplier)

router.get('/about', mainController.getAbout)

module.exports = router;