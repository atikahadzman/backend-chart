const tableUsers = require('../data/users');

const getUsers = (req, res) => {
    res.json(tableUsers);
};

module.exports = {
    getUsers
};