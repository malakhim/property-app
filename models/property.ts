import {Model, DataTypes} from 'sequelize';
import {sequelize} from '.';
import Tenancy from './tenancy';

interface PropertyAttributes {
  id: number,
  address: string, 
  purchase_price: number,
  valuation_amount?: number,
  valuation_date?: Date
};

interface PropertyInstance
  extends Model<PropertyAttributes>,
    PropertyAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    };

const Property = sequelize.define<PropertyInstance>('Property', {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  purchase_price: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  valuation_amount: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  valuation_date: {
    type: DataTypes.DATE
  }
});

Property.hasMany(Tenancy, {
  foreignKey: 'property',
  as: 'tenancies'
});

export default Property;
