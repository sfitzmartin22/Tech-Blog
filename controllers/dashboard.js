const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({ 
            include: [
                { 
                    model: User,
                    attributes: ["username"]  
                },
            ],
            where: {
                user_id: req.session.user_id
            }
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('dashboard', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/blog/", withAuth, async (req, res) => {
    res.render('createblog', {logged_in: req.session.logged_in, user: req.session.user});
});

module.exports = router;