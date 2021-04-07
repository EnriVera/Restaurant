const { Model, INTEGER } = require('sequelize')
const { commonModel, commonOptions } = require('./common.repository');
const { sequelize } = require("./sequelize");

class AdditionProduct extends Model { }

AdditionProduct.init(
    {
        ...commonModel,
        count: {
            type: INTEGER,
            allowNull: false,
            field: 'count'
        },
    },
    { ...commonOptions, modelName: "AdditionProduct", sequelize }
);

AdditionProduct.beforeSync(() => console.log(`The AdditionProduct table is created`));

export default AdditionProduct;