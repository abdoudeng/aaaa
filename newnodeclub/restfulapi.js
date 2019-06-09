var express = require('express')
var router  = express.Router()
var carController = require('./api/v2/car')
var driverController = require('./api/v2/driver')
var recordController = require('./api/v2/record')

router.get('/car', carController.index)
router.post('/car/add', carController.add)
router.get('/car/search', carController.search)

router.post('/driver/add', driverController.add)
router.get('/driver', driverController.index)
router.get('/driver/search',driverController.search)

router.get('/record', recordController.index)
router.post('/record/add', recordController.add)
router.get('/record/search', recordController.search)
router.put('/record/update', recordController.update)

module.exports = router;
