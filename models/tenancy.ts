import {Model, DataTypes, Deferrable, Sequelize} from 'sequelize';
import {sequelize} from '.';
import Property from './property';

interface TenanciesInterface extends Model {
  id: number,
  active: boolean,
  start_date: Date,
  end_date: Date,
};

const Tenancy = sequelize.define<TenanciesInterface>('Tenancy', {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  start_date: { type: DataTypes.DATE},
  end_date: { type: DataTypes.DATE}
});

Tenancy.belongsTo(Property, {
  foreignKey: 'property',
  as: 'tenancy'
})

export default Tenancy;