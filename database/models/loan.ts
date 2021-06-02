import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: { INTEGER: DataTypes.IntegerDataType; STRING: DataTypes.StringDataType; DATE: DataTypes.DateDataType; }) => {
  class Loan extends Model {
    static associate(models:any) {
      this.belongsTo(models.Property)
    }
  };
  Loan.init({
    amount: DataTypes.INTEGER,
    bank: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Loan',
  });
  return Loan;
};

export const name = "Loan"