const { sequelize } = require('../../config/tenantDatabase');
const seeders = require("../seeders")

module.exports = async () => {
  try {
    await sequelize.sync({ force: true });
    await seeders.up(sequelize.getQueryInterface(), sequelize.constructor);
    console.log('Tenant Seed executed successfully');
  } catch (error) {
    console.error('Error seeding Tenant:', error);
  } finally {
    await sequelize.close();
  }
};
