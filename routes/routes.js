const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/UserController');
const { getChartDonut } = require('../controllers/DonutController');

router.get('/users', getUsers);
router.get('/chart-donut', getChartDonut);

module.exports = router;