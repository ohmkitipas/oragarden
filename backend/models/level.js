module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Level',{
        name: {
            type: DataTypes.STRING(255),
        },
        description: {
            type: DataTypes.STRING(1000),
        }
    },
    {
        tableName: 'Level'
    }

    );
    model.associate = models => {
        model.hasMany(models.Product, {foreignkey: 'level_id'});
    };
    return model;
}