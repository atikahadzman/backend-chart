const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/UserController');
const { getChartDonut } = require('../controllers/DonutController');
const { getChartBar } = require('../controllers/BarController');

router.get('/users', getUsers);
router.get('/chart-donut', getChartDonut);
router.get('/chart-bar', getChartBar);

module.exports = router;