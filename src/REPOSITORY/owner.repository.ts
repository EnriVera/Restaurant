const { sequelize } = require("./sequelize/sequelize");

const Owner = () => {
    sequelize.query(`
    create table Owner(
        id uuid primary key not null,
        nanme varchar(15),
        email varchar(100)
    );
    `)
}

export default Owner;