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
                _id: req.params._id }) //may want to change from username to userId if one is given. need to test routes
                .select('-__v')
                .lean();
            
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID or username if found.'});
            }

            res.json({
                user,
            })
       
        //need a catch 
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
          }
        },
// get 1 and update user by id
        async updateUserData(req, res) {
          try {
              const user = await User.findOneAndUpdate({
                  _id: req.params._id },
                  {$set:req.body},
                  {runValidators: true, new: true}) 
                  .select('-__v')
                  .lean();
              
              if (!user) {
                  return res.status(404).json({ message: 'No user with that ID or username found.'});
              }
  
              res.json({
                  user,
              })
         
          //need a catch 
          } catch (err) {
              console.log(err);
              return res.status(500).json(err);
            }
          },

        // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a student and remove them from the course
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ username: req.params.username });

      if (!user) {
        return res.status(404).json({ message: `This username, ${username}, does not exist.` }) //do template literals work here?
      }

      const thought = await Thought.findOneAndUpdate(
        { username: req.params.username },
        { $pull: { username: req.params.username } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({
          message: `${username} is invalid and no thoughts found.`,
        });
      }

      res.json({ message: `User ${username} is successfully deleted.` });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
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
  },
};

