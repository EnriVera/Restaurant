const { Model, STRING } = require('sequelize');
const {commonModel, commonOptions} = require('./common.repository');
import Tables from "./tables.repository";
const { sequelize } = require("./sequelize");

class Restaurant extends Model { }

Restaurant.init(
    {
        ...commonModel,
        name: {
            type: STRING({ length: 10 }),
            allowNull: false,
            field: 'name'
        }
    },
    { ...commonOptions, modelName: "Restaurant", sequelize}
);

Restaurant.hasMany(Tables, {
    foreignKey: "restaurant_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Restaurant.beforeSync(() => console.log(`The restaurant table is created`));

export default Restaurant;