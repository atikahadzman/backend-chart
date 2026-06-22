const chartBar = require('../data/chartBar');

const getChartBar = (req, res) => {
    res.json(chartBar);
};

module.exports = {
    getChartBar
};