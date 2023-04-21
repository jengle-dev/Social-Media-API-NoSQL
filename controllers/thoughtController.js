
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require ('../models');

module.exports = {
//get all thoughts
    async getAllThoughts(req, res) {
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

  // Add a new thought for a user
  async addThought(req, res) {
    try {
      console.log('You are adding a new thought');
      console.log(req.body);
      const thought = await Thought.findOneAndUpdate(
        { username: req.params.username },
        { $addToSet: { thoughtText: req.body } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: `${username} is invalid and no thoughts can be added.` })
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove thought from a user
  async removeThought(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { username: req.params.username },
        { $pull: { thought: { thoughtText: req.params.thoughtText } } },
        { runValidators: true, new: true }
      ); 

      if (!user) {
        return res
          .status(404)
          .json({ message: `${username} is invalid and no thoughts found.` });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};