import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: {STRING: DataTypes.StringDataType}) => {
  class Tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      this.belongsToMany(models.Tenancy, {through: 'Tenants_Tenancies'});
    }
  };
  Tenant.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tenant',
  });
  return Tenant;
};
export const name = "Tenant";