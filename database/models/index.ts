import fs from 'fs';
import path from 'path';
import {Sequelize, DataTypes, Model} from 'sequelize';
import {config as configArray} from  '../config/config';

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';

const config = configArray[<keyof typeof configArray>env];

const db:{[modelName:string]: any} = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname) 
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts' || file.slice(-3) === '.js');
  })
  .forEach(async file => {
    const model = await import(`${path.join(__dirname, file)}`);
    model.default(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
