(() => {
    const { Model, STRING } = require('sequelize')
    const { commonModel, commonOptions } = require('./common.model');

    class Tables extends Model { }

    module.exports = (sequelize: any) => {

        Tables.init(
            {
                ...commonModel,
                name_table: {
                    type: STRING({ length: 12 }),
                    allowNull: false,
                    field: 'name_table'
                },
                estate: {
                    type: STRING({ length: 7 }),
                    allowNull: false,
                    field: 'name_table'
                }
            },
            { sequelize, ...commonOptions }
        );
        Tables.associate = function (models: any) {
            Tables.hasMany(models.Addition, { as: 'additions' })
        };
        return Tables.sync({ force: true })
            .then(() => console.log('Created the Tables table'))
            .catch(console.error)
    };
})