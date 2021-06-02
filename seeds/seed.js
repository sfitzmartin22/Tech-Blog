const sequelize = require('../config/connection');
const { User, Comment, Blog } = require('../models');

const userData = require('./userData.json');
const commentData = require('./commentData.json');
const blogData = require('./blogData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await User.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

};

seedDatabase();