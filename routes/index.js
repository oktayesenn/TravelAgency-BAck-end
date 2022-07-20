const express = require('express')
const router = express.Router()

// router.use('/users', require('./users'))
router.use('/userLogin', require('./userLogin'))
router.use('/userMarket', require('./userMarket'))

module.export = router