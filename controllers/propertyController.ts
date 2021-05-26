import {db} from '../database/models';
import express from 'express';

console.warn({db})

export const PropertyController = {
  findAll: async (req:express.Request, res: express.Response) => {
    try {
      const properties = await db.property.findAll();
      res.json(properties);
    } catch(err) {
      res.status(500).json(err)
    }
  },
  create: (req: express.Request, res: express.Response) => {
    try {
      db.property.create({
        address: req.body.address, 
        purchase_price: req.body.purchase_price
      });
    } catch(err) {
      res.status(500).json(err)
    }
  }
}
