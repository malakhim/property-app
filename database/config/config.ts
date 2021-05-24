import dotenv from 'dotenv';
import type { Dialect } from 'sequelize';
dotenv.config();

export const config = {
  development: {
    "username": "me",
    "password": "passport",
    "database": "api",
    "host": "127.0.0.1",
    "dialect": <Dialect>"postgres"
  }
}