const { Model, STRING } = require('sequelize')
const { commonModel, commonOptions } = require('./common.repository');
import Addition from "./addition.repository";
const { sequelize } = require("./sequelize");

class Tables extends Model { }

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
    { ...commonOptions, modelName: "Tables", sequelize}
);

Tables.hasMany(Addition, {
    foreignKey: "tables_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Tables.beforeSync(() => console.log(`The tables table is created`));

export default Tables;
// export default  (sequelize: any) => {

//     Tables.init(
//         {
//             ...commonModel,
//             name_table: {
//                 type: STRING({ length: 12 }),
//                 allowNull: false,
//                 field: 'name_table'
//             },
//             estate: {
//                 type: STRING({ length: 7 }),
//                 allowNull: false,
//                 field: 'name_table'
//             }
//         },
//         { sequelize, modelName: "tables", ...commonOptions}
//     );
//     // Tables.associate = function (models: any) {
//     //     Tables.hasMany(models.Addition, { as: 'additions' })
//     //     Tables.belongsTo(models.Restaurant);
//     // };
//     return Tables;
//     // return Tables.sync({ force: true })
//     //     .then(() => console.log('Created the Tables table'))
//     //     .catch(console.error)
// };