const { Model, STRING, INTEGER } = require('sequelize')
const { commonModel, commonOptions } = require('./common.repository');
import AdditionProduct from "./addition-product.repository";
const { sequelize } = require("./sequelize");

class Product extends Model { }

Product.init(
    {
        ...commonModel,
        title: {
            type: STRING({ length: 12 }),
            allowNull: false,
            field: 'title'
        },
        description: {
            type: STRING({ length: 100 }),
            allowNull: true,
            field: 'description'
        },
        type_plate_drink: {
            type: STRING({ length: 5 }),
            allowNull: false,
            field: 'type_plate_drink'
        },
        percentage_sale: {
            type: INTEGER,
            allowNull: false,
            field: 'percentage_sale'
        },
        price: {
            type: INTEGER,
            allowNull: false,
            field: 'price'
        }
    },
    { ...commonOptions, modelName: "Product", sequelize }
);

Product.hasMany(AdditionProduct, {
    foreignKey: "product_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Product.beforeSync(() => console.log(`The product table is created`));

export default Product;