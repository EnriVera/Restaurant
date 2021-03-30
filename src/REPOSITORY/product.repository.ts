(() => {
    const { Model, STRING, INTEGER } = require('sequelize')
    const { commonModel, commonOptions } = require('./common.model');

    class Product extends Model { }

    module.exports = (sequelize: any) => {

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
            { sequelize, ...commonOptions }
        );
        Product.associate = function (models: any) {
            Product.hasMany(models.AdditionProduct, { as: 'additions_products' })
        };
        return Product.sync({ force: true })
            .then(() => console.log('Created the Product table'))
            .catch(console.error)
    };
})