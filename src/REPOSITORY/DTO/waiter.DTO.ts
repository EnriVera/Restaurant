const { sequelize } = require("./sequelize/sequelize");

const Waiter = () => {
    sequelize.query(`SELECT * FROM waiter`).then(() => {
        console.log("INFO - waiter - Previously created database")
    }).catch(() => {
        sequelize.query(`
        create table waiter(
            id uuid primary key not null,
            name varchar(12) not null ,
            number_mozo varchar not null
        );
        `);
    });
}
export default Waiter;