const { sequelize } = require('../../config/coreDatabase');
const seeders = require("../seeders")

module.exports = async () => {
  try {
    await sequelize.sync({ force: true });
    await seeders.up(sequelize.getQueryInterface(), sequelize.constructor);
    console.log('Core Seed executed successfully');
  } catch (error) {
    console.error('Error seeding Core:', error);
  } finally {
    await sequelize.close();
  }
};