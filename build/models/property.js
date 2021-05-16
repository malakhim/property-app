"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const tenancy_1 = __importDefault(require("./tenancy"));
;
;
const Property = _1.sequelize.define('Property', {
    id: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    purchase_price: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    valuation_amount: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    valuation_date: {
        type: sequelize_1.DataTypes.DATE
    }
});
Property.hasMany(tenancy_1.default, {
    foreignKey: 'property',
    as: 'tenancies'
});
exports.default = Property;
