"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const property_1 = __importDefault(require("./property"));
;
const Tenancy = _1.sequelize.define('Tenancy', {
    id: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    start_date: { type: sequelize_1.DataTypes.DATE },
    end_date: { type: sequelize_1.DataTypes.DATE }
});
Tenancy.belongsTo(property_1.default, {
    foreignKey: 'property',
    as: 'tenancy'
});
exports.default = Tenancy;
