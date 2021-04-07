const { Model, STRING, INTEGER, DATE } = require('sequelize')
const { commonModel, commonOptions } = require('./common.repository');
import AdditionProduct from "./addition-product.repository";
const { sequelize } = require("./sequelize");

class Addition extends Model { }

Addition.init(
    {
        ...commonModel,
        date: {
            type: DATE,
            allowNull: true,
            field: 'date'
        },
        status: {
            type: STRING({ length: 7 }),
            allowNull: false,
            field: 'status'
        },
        total: {
            type: INTEGER,
            allowNull: false,
            field: 'total'
        }
    },
    { ...commonOptions, modelName: "Addition", sequelize }
);

Addition.hasMany(AdditionProduct, {
    foreignKey: "addition_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Addition.beforeSync(() => console.log(`The addition table is created`));

export default Addition;