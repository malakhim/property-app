import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: {STRING: DataTypes.StringDataType}) => {
  class User extends Model {
    static associate(models:any) {
      // define association here
      this.belongsToMany(models.Property, {through: 'Users_Property'});
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export const name = "User"