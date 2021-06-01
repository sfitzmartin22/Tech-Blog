const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('signUp', {PLACEHOLDER});
});

module.exports = router;