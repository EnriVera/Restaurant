const { sequelize } = require("./sequelize/sequelize");

const AdditionProduct = () => {
    sequelize.query(`SELECT * FROM additionproduct`).then(() => {
        console.log("INFO - additionproduct - Previously created database")
    }).catch(() => {
        sequelize.query(`
    create table additionproduct(
        id uuid primary key not null,
        count INTEGER not null,
        id_addition uuid,
        id_product uuid,
        foreign key (id_addition) references Addition (id),
        foreign key (id_product) references Product (id)
    );
    `)
    })
}

export default AdditionProduct;