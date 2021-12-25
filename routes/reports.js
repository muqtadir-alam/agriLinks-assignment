var express = require('express');
var router = express.Router();
const reportDetailsController = require('../controller/reportDetails');

router.post('/reports', reportDetailsController.addReports);
router.get('/reports', reportDetailsController.getReports);

module.exports = router;
