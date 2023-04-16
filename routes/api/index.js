const router = require('express').Router();
const thoughtRoutes = require ('./thoughtRoute');
const userRoutes = require ('/userRoute');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
