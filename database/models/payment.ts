import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: { INTEGER: DataTypes.IntegerDataType; STRING: DataTypes.StringDataType; DATE: DataTypes.DateDataType; }) => {
  class Payment extends Model {
    static associate(models: any) {
      this.belongsTo(models.Tenancy);
    }
  };
  Payment.init({
    tenancyId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};