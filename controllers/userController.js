// ObjectId() method for converting username string into an ObjectId for querying database

const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require ('../models');

// Create an aggregate function to get the number of total users
// Create an aggregate function to get the number of total thoughts for a specific user
// Create an aggregate function to get the number to total reactions to a specific thought under a specific user

const totalUsers = async () => {
    const numberOfUsers = await User.
    aggregate([
        {$count: 'user'}
    ]);
    return numberOfUsers;
};


module.exports = {
    // Get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            const userObj = {
                users,
                totalUsers: await totalUsers(),
            };
            return res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({
                _id: req.params.username }) //may want to change from username to userId if one is given. need to test routes
                .select('-__v')
                .lean();
            
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID or username if found.'});
            }

            res.json({
                user,

            })
        }
    }
}