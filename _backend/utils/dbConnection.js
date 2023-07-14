const Sequelize = require('sequelize');
console.log(process.env.USER)
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'
}); 
(async ()=>{
  await sequelize.sync();
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()


module.exports = sequelize;
