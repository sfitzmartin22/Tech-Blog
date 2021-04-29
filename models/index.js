const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

Blog.hasMany(Comment, {
    foreignKey: "blog_id",
    onDelete: "CASCADE"
});

Blog.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Blog, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Blog, {
    foreignKey: "blog_id"
});

module.exports = {Blog, User, Comment};