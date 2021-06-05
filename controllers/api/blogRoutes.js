const router = require('express').Router();
const { Blog } = require("../../models")
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
        }; 
});

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if(!blogData) {
            res.status(404).json({ message: "There is no blog with this id!"});
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/id:", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {where: {id:req.body.id, user_id: req.session.user_id}});
        if(!blogData) {
            res.status(404).json({ message: "There is no blog with this id!"});
            return;
        }
        res.status(200).json({blogData});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.delete('/delete', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({where: {id: req.body.id, user_id: req.session.user_id}});
        if (!blogData) {
            res.status(400).json({message: "There was no blog found with this id."});
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;