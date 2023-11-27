const dotenv = require('dotenv');

dotenv.config();

const tenantDatabase = {
  development: {
    dialect: process.env.DB_DIALECT_TENANT,
    username: process.env.DB_USERNAME_TENANT,
    password: process.env.DB_PASSWORD_TENANT,
    database: process.env.DB_NAME_TENANT,
    port: process.env.DB_PORT_TENANT,
    host: process.env.DB_HOST_TENANT,
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData',
  },
};

module.exports = tenantDatabase;
