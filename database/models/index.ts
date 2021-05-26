import fs from 'fs';
import path from 'path';
import {Sequelize, DataTypes} from 'sequelize';
import type {Model} from 'sequelize'
import {config as configArray} from  '../config/config';

interface associateModel extends Model {
  associate: (db: models) => void,
  sequelize: Sequelize
}

interface models {
  'loan': associateModel,
  'payment': associateModel,
  'property': associateModel,
  'tenancy': associateModel,
  'tenant': associateModel,
  'user': associateModel
};

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';

const config = configArray[<keyof typeof configArray>env];

let db: any = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname) 
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const model:{name: string, default: (sequelize: Sequelize, DataTypes:any) => associateModel} = require(`${path.join(__dirname, file)}`);
    const newModel = model.default(sequelize, DataTypes);
    db[model.name] = newModel;
    // console.warn({model});
    // console.warn({file});
    // console.warn({db});
  });
// console.log(db);


Object.keys(db).forEach(modelName => {
    db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export {db};