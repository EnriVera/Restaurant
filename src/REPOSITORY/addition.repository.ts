(() => {
    const { Model, STRING, INTEGER, DATE } = require('sequelize')
    const { commonModel, commonOptions } = require('./common.model');

    class Addition extends Model { }

    module.exports = (sequelize: any) => {

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
            { sequelize, ...commonOptions }
        );
        Addition.associate = function (models: any) {
            Addition.hasMany(models.AdditionProduct, { as: 'additions_products' })
        };
        return Addition.sync({ force: true })
            .then(() => console.log('Created the Addition table'))
            .catch(console.error)
    };
})