import {Model} from 'sequelize';
import type {Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: { INTEGER: any; STRING: any; DATE: any; }) => {
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