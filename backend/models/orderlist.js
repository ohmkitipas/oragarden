module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('OrderList', {
        productName: {
           type: DataTypes.STRING(255),
        },
        productPrice: {
           type: DataTypes.DECIMAL
        },
        amount:{
           type: DataTypes.INTEGER
        }
    },
    {
      tableName: 'OrderLists'
    });

    /*model.associate = models => {
       model.belongTo(models.Product, {foreignKey: 'product_id'});
       model.belongTo(models.Orders, {foreignKey: 'order_id'});
       model.belongTo(models.User, {foreignKey: 'user_id'});
    };*/

    return model;
}

