module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('User',{
        name: {
           type: DataTypes.STRING(255),
        },
        lastName: {
           type: DataTypes.STRING(255),
        },
        tell: {
           type: DataTypes.INTEGER,
        },
        address: {
           type: DataTypes.STRING(1000),
        },
        email: {
           type: DataTypes.STRING(255),
        },
        permit: {
           type: DataTypes.STRING(255),
        }
    },
    {
        tableName: 'Users'
    });
    model.associate = models => {
        model.belongToMany(models.Product, { through: model.Orders, foreignKey: 'user_id' });
        model.hasMany(models.OrderList, { foreignKey: 'user_id'});
    }

    return model;
}