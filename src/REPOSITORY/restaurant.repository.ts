(() => {
    const { Model, STRING } = require('sequelize')
    const { commonModel, commonOptions } = require('./common.model');

    class Restaurant extends Model { }

    module.exports = (sequelize: any) => {

        Restaurant.init(
            {
                ...commonModel,
                name: {
                    type: STRING({ length: 10 }),
                    allowNull: false,
                    field: 'name'
                }
            },
            { sequelize, ...commonOptions }
        );
        Restaurant.associate = function (models: any) {
            Restaurant.hasMany(models.Tables, { as: 'tables' })
        };
        return Restaurant.sync({ force: true })
            .then(() => console.log('Created the Restaurant table'))
            .catch(console.error)
    };
})