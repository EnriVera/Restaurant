const { sequelize } = require("./sequelize/sequelize");

const Restaurant = () => {
    sequelize.query(`SELECT * FROM restaurant`).then(() => {
        console.log("INFO - restaurant - Previously created database")
    }).catch(() => {
        sequelize.query(`
        create table restaurant(
            id uuid primary key not null,
            name varchar(10) not null ,
            id_owner uuid not null,
            foreign key (id_owner) references Owner (id)
        );
        `);
    });
}

export default Restaurant;