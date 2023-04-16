//CRUD - Create, Read , Update, Delete
// formatted JSON
// if user status is author allow update/delete, else don't
const router = request('express').Router();
const {
    getAllUsers,
    getSingleUser,
    getUserFriends,
    createUser,
    updateFriends,
    deleteUser,
    deleteFriend,
    createThought,
    createReaction,
    deleteThought,
    deleteReaction,
} = require ('../../controllers/userController');

// /api/user
// GET all users getAllUsers
// GET all users & all thoughts/posts
// GET all users & all thoughts/posts and filter by Date

// GET specific user getSingleUser
// GET specific users & all thoughts/posts
// GET specific users & specific thought/post
// GET specific users & specific thought/post and update
// GET specific users & specific thought/post and delete

// GET getuserFriends

// CREATE new user
// New user requires username & email and both are unique

// CREATE new thought

// GET specific user and select a thought to POST a reaction

// DELETE specific user & all thoughts & all reactions they have posted and all reactions posted to their thoughts

module.exports = router;