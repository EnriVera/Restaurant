const { sequelize } = require("./sequelize/sequelize");

const Addition = () => {
    sequelize.query(`SELECT * FROM addition`).then(() => {
        console.log("INFO - addition - Previously created database")
    }).catch(() => {
        sequelize.query(`
    create table addition(
        id uuid primary key not null,
        date date not null,
        status varchar(10) not null  default ('abierto'),
        total INTEGER,
        id_table uuid,
        foreign key (id_table) references Tables (id)
    );
    `)
    })
}

export default Addition;