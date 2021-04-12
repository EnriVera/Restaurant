const { sequelize } = require("./sequelize/sequelize");

const Waiter = () => {
    sequelize.query(`
    create table Waiter(
        id uuid primary key not null,
        name varchar(12) not null ,
        number_mozo varchar not null
    );
    `);
}
export default Waiter;