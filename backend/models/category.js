module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Category', {
        name: {
            type: DataTypes.STRING(255),
        },
        description: {
            type: DataTypes.STRING(1000),
        }
    },
    {
        tableName: 'Category'
    }

    );
    model.associate = models => {
        model.hasMany(models.Product, { foreignKey: 'category_id'});
    };

    return model;
}