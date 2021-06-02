import {db} from '../database/models';
import {Request, Response, NextFunction} from 'express';

export const PropertyController = {
  findAll: async (req:Request, res: Response, next: NextFunction) => {
    try {
      const properties = await db.Property.findAll();
      res.json(properties);
    } catch(err) {
      next(err);
    }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const property = await db.Property.create({
        address: req.body.address,
        purchase_price: req.body.purchase_price
      });
      res.json(property);
    } catch(err) {
      next(err);
    }
  }
}
