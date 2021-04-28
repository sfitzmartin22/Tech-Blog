const sequelize = require('../config/connection');
const { User, Comment, Blog } = require('../models');

const userData = require('./userData.json');
const commentData = require('./projectData.json');
const blogData = require('./userData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();