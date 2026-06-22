const chartDonut = require('../data/chartDonut');

const getChartDonut = (req, res) => {
    res.json(chartDonut);
};

module.exports = {
    getChartDonut
};