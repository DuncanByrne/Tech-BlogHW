const router = require('express').Router();

const dashboardRoutes = require('./dashboard-route.js');
const homepageRoutes = require('./homepage-route');
const apiRoutes = require("./api")

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;