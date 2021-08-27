const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes.js');
const homepageRoutes = require('./homepage-routes');
const apiRoutes = require("./api")

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;