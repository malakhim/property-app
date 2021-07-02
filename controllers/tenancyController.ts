import {db} from '../database/models';
import {Request, Response, NextFunction} from 'express';

export const TenancyController = {
  findAll: async (req:Request, res: Response, next: NextFunction) => {
    try {
      const tenancies = await db.Tenancy.findAll();
      res.json(tenancies);
    } catch(err) {
      next(err);
    }
  },
  findAllActive: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const activeTenancies = await db.Tenancy.findAll({
        where: {
          active: true
        }
      });
      res.json(activeTenancies);
    } catch(err) {
      next(err);
    }
  }
}
