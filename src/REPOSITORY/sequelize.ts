const Sequelize = require('sequelize');
require('dotenv').config();

const init = () => {
    const sequelize = new Sequelize("postgres://restaurant:rSUzRBlj4Sbi8625QHilqiCmcuMax2@pg/postgres_restaurant", {
        dialect: 'postgres'
    });

    return sequelize;
}

module.exports = {sequelize: init()}