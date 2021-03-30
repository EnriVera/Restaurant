(() => {
    const { Model, INTEGER } = require('sequelize')
    const { commonModel, commonOptions } = require('./common.model');

    class AdditionProduct extends Model { }

    module.exports = (sequelize: any) => {

        AdditionProduct.init(
            {
                ...commonModel,
                count: {
                    type: INTEGER,
                    allowNull: false,
                    field: 'count'
                },
            },
            { sequelize, ...commonOptions }
        );
        return AdditionProduct.sync({ force: true })
            .then(() => console.log('Created the AdditionProduct table'))
            .catch(console.error)
    };
})