const { UUID, UUIDV4 } = require('sequelize');

const commonModel = {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    }
}

const commonOptions = {
    createdAt: 'created_at', 
    updateAt: 'updated_at'
}

module.exports = {commonModel, commonOptions}