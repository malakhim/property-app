import {DataTypes, Model, Sequelize} from 'sequelize';

export default (sequelize:Sequelize, DataTypes: {STRING: DataTypes.StringDataType}) => {
  class User extends Model {
    static associate(models:any) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};