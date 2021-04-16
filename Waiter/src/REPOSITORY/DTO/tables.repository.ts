const { Model, STRING } = require('sequelize')
const { sequelize } = require("./sequelize/sequelize");

const Tables = () => {
    sequelize.query(`SELECT * FROM tables`).then(() => {
        console.log("INFO - tables - Previously created database")
    }).catch(() => {
        sequelize.query(`
    create table tables(
        id uuid primary key not null,
        name_table varchar(12) not null ,
        status varchar(10) not null default('libre'),
        id_restaurant uuid not null ,
        id_waiter uuid,
        foreign key (id_restaurant) references Restaurant (id),
        foreign key (id_waiter) references Waiter (id)
    );
    `)
    })
}

export default Tables;