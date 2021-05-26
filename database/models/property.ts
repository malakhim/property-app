import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: { INTEGER: DataTypes.IntegerDataType; STRING: DataTypes.StringDataType; DATE: DataTypes.DateDataType; }) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      this.hasMany(models.Tenancy);
      this.hasMany(models.Loan);
      this.belongsToMany(models.User, {through: 'Users_Property'});
    }
  };
  Property.init({
    address: DataTypes.STRING,
    purchase_price: DataTypes.INTEGER,
    last_valuation_amount: DataTypes.INTEGER,
    last_valuation_date: DataTypes.INTEGER,
    estimated_value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};

export const name = "Property";