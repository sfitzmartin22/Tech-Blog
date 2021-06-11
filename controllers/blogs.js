const router = require('express').Router();
const { Blog, User, Comment} = require("../models");
const withAuth = require('../utils/auth');


router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                { 
                    model: User
                }
            ]
        });

        const blogs = blogData.get({ plain: true });

        const commentData = await Comment.findAll({ 
            where: {blog_id: req.params.id},
            include: [
                {model: User}
            ]
        });

        const comments = commentData.map((comment) => comment.get({ plain: true }));

        res.render('blogs', {
            blogs,
            comments,
            blog_id: req.params.id,
            user_id: req.params.user_id,
            logged_in: req.session.logged_in
        });
        } catch (err) {
            res.status(500).json(err);
        };
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                { 
                    model: User
                }
            ]
        });

        if(!blogData) {
            res.status(404).json({message: "there is not blog with that id"});
            return;
        }

        const blogs = blogData.get({ plain: true });

        res.render('editblog', {
            blogs,
            blog_id: req.params.id,
            user_id: req.params.user_id,
            logged_in: req.session.logged_in
        });
        } catch (err) {
            res.status(500).json(err);
        };
});



module.exports = router;