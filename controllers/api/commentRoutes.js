const router = require('express').Router();
const { Comment } = require("../../models")
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newComment);
        } catch (err) {
            res.status(400).json(err);
        }; 
});

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if(!blogComment) {
            res.status(404).json({ message: "There is no comment on this blog!"});
            return;
        }

        res.status(200).json(blogComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if(!blogComment) {
            res.status(404).json({ message: "There is no comment on this blog!"});
            return;
        }

        res.status(200).json(blogComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;