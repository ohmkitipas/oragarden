module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('WaterLevel',{
        name: {
            type: DataTypes.STRING(255),
        },
        description: {
            type: DataTypes.STRING(1000),
        }
    },
    {
        tableName: 'WaterLevel'
    }

    );
    model.associate = models => {
        model.hasMany(models.Product, {foreignKey: 'water_id'});
    };
    return model
}