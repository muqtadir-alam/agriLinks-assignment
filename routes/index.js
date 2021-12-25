var express = require('express');
var router = express.Router();
const reportsRoutes = require('./reports');
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
router.use('/api/v1', reportsRoutes);

module.exports = router;
