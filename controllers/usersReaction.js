const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require ('../models');


module.exports = {
    async getAllReactions(req, res) {
        try {
            const users = await User.find();
            const userObj = {
                users,
            };
            return res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Add a new reaction for a user's thought
    async addReaction(req, res) {
     try {
       console.log('You are adding a new reaction');
       console.log(req.body);
       const reaction = await Reaction.findOneAndUpdate(
         { reactionBody: req.params.reactionBody },
         { $addToSet: { thoughtText: req.body } },
         { runValidators: true, new: true }
       );
   
       if (!user) {
         return res
           .status(404)
           .json({ message: `${username} is invalid and no reaction can be added.` })
       }
   
       res.json(user);
     } catch (err) {
       res.status(500).json(err);
     }
   },
   }