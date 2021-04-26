const { sequelize } = require("./sequelize/sequelize");

const Owner = () => {
    sequelize.query(`SELECT * FROM owner`).then(() => {
        console.log("INFO - owner - Previously created database")
    }).catch(() => {
        sequelize.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        create table owner(
            id uuid primary key not null,
            name varchar(15) not null,
            email varchar(100) not null,
            password varchar,
            logo varchar,
            googleID varchar,
            googleVerified boolean
        );
        `)
    });
}
export default Owner;