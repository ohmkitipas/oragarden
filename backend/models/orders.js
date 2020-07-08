module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Orders', {
     totalPrice:{
        type: DataTypes.DECIMAL
     }
    },
    {
        tableName: 'Orders'
    });
    model.associate = models => {
      model.hasMany(models.OrderList, { foreignKey: 'order_id'});
    };
    
    return model;
}