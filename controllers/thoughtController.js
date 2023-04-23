
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // GET all thoughts for a specific user
  async getAllThoughts(req, res) {
    try {
      const users = await User.find();
      return res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // GET a single thought for a user
  async getOneThought(req, res) {
    try { 
      const users = await User.findOne();
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // CREATE a new thought for a user
  async createThought(req, res) {
    try {
      console.log('You are adding a new thought');
      console.log(req.body);
      const newThought = await Thought.create(req.body);
      const userThought = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought._id } },
        { runValidators: true, new: true }
      );

      if (!userThought) {
        return res
          .status(404)
          .json({ message: `${username} is invalid and no thoughts can be added.` })
      }

      res.json(userThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete thought from a user
  async deleteThought(req, res) {
    try {
      const user = await Thought.findOneAndUpdate(
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
