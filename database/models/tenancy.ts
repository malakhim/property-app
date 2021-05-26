import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: {BOOLEAN: DataTypes.DataType, DATE: DataTypes.DateDataType}) => {
  class Tenancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      this.belongsTo(models.Property);
      this.belongsToMany(models.Tenant, {through: 'Tenants_Tenancies'});
      this.hasMany(models.Payment);
    }
  };
  Tenancy.init({
    active: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Tenancy',
  });
  return Tenancy;
};

export const name = "Tenancy";