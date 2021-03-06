const Sequelize = require('sequelize');
require('dotenv').config();

const init = () => {
    const { DB_HOST, DB_DB, DB_USER, DB_PASS } = process.env;
    const sequelize = new Sequelize(DB_DB, DB_USER, DB_PASS, {
        host: DB_HOST,
        dialect: 'postgres'
    });

    sequelize.authenticate()
             .then(() => console.log('Conected'))
             .catch(console.error)
}