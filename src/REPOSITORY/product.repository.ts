const { sequelize } = require("./sequelize/sequelize");

const Product = () => {
    sequelize.query(`
    create table Product(
        id uuid primary key not null,
        title varchar(20) not null ,
        description varchar(100),
        type_plate_drink varchar(5) not null,
        price INTEGER
    );
    `);
}

export default Product;