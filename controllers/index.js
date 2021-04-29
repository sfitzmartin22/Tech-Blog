const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const blogRoutes = require('.blogs');
const dashboardRoutes = require('./dashboard');
const loginRoutes = require('./login');
const signUpRoutes = require('./signUp');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blogs', blogRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signUpRoutes);

module.exports = router;
