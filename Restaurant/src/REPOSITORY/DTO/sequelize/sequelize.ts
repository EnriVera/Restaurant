const Sequelize = require('sequelize');

const url = process.env.DB_URL
const init = () => {
    const sequelize = new Sequelize(url, {
        dialect: 'postgres',
        logging: false
    });

    return sequelize;
}

module.exports = {sequelize: init()}