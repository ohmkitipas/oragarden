const category = require("./category");

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Product',{
        name: {
           type: DataTypes.STRING(255),
        },
        detail: {
           type: DataTypes.STRING(1000),
        },
        Price: {
           type: DataTypes.DECIMAL,
        },
        img1: {
           type: DataTypes.STRING(255),
        },
        img2: {
           type: DataTypes.STRING(255),
        },
        img3: {
           type: DataTypes.STRING(255),
        },
        img4: {
           type: DataTypes.STRING(255,)
        },
        img5: {
           type: DataTypes.STRING(255),
        }
    },
    {
        tableName: 'products'
    });
    model.associate = models => {
        model.belongTo(models.Category, {foreignKey: 'category_id'});
        model.belongTo(models.Level, {foreignKey: 'level_id'});
        model.belongTo(models.WaterLevel, { foreignKey: 'water_id'});
        model.belongToMany(models.User, {through: models.Orders, foreignKey: 'product_id'});
        //model.hasMany(models.OrderList, { foreignKey: 'product_id'});
    };

    return model;
}