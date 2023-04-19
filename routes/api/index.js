//entry point
const router = require('express').Router();
const thoughtRoutes = require ('./thoughtRoute');
const userRoute = require ('./userRoute');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoute);

module.exports = router;
