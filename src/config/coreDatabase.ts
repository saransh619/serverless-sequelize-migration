import { Dialect } from 'sequelize/types';
import dotenv from 'dotenv';

dotenv.config();

const coreDatabase = {
  development: {
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

export default coreDatabase;