const { ObjectId } = require('mongoose').Types;
const { User } = require ('../models');

module.exports = {
    // Get all users
    async addFriend(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { _id:req.params.userId }, 
                {$addToSet: { friends: req.params.friendId }},
                { new: true }
                );
        if (!users) {
                    return res.status(404).json({ message: 'No user with that ID or username if found.'});
                }
    
                res.json({
                    users,      
                })  
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { _id:req.params.userId }, 
                {$pull: { friends: req.params.friendId }},
                { new: true }
                );
        if (!users) {
                    return res.status(404).json({ message: 'No user with that ID or username if found.'});
                }
    
                res.json({
                    users,      
                })  
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
};

