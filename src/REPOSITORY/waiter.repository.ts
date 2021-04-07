const { Model, STRING, INTEGER } = require('sequelize')
const { commonModel, commonOptions } = require('./common.repository');
import Tables from "./tables.repository";
const { sequelize } = require("./sequelize");

class Waiter extends Model { }

Waiter.init(
    {
        ...commonModel,
        name: {
            type: STRING({ length: 12 }),
            allowNull: false,
            field: 'name'
        },
        number_mozo: {
            type: INTEGER,
            allowNull: false,
            field: 'number_mozo'
        }
    },
    { ...commonOptions, modelName: "Waiter", sequelize }
);

Waiter.hasMany(Tables, {
    foreignKey: "waiter_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Waiter.beforeSync(() => console.log(`The waiter table is created`));
export default Waiter;