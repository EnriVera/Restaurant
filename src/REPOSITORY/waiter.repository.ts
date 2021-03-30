(() => {
    const { Model, STRING, INTEGER } = require('sequelize')
    const { commonModel, commonOptions } = require('./common.model');

    class Waiter extends Model { }

    module.exports = (sequelize: any) => {

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
            { sequelize, ...commonOptions }
        );
        Waiter.associate = function (models: any) {
            Waiter.hasMany(models.Tables, { as: 'tables' })
        };
        return Waiter.sync({ force: true })
            .then(() => console.log('Created the Waiter table'))
            .catch(console.error)
    };
})