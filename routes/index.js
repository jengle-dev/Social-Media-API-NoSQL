// api route requirement
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Oops! That is the wrong route!'));

module.exports = router;
