const router = require('express').Router();
const { Blog, User, Comment} = require("../models");


router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({ 
            include: [
                {
                    model: User,
                    attributes: ["username"]
                },
                {
                    model: Comment,
                }
            ]
        });

        const blogs = await blogData.map((blog) => blog.get({ plain: true }));

        res.render('homepage', {
            blogs
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router

