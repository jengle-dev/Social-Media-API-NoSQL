//CRUD - Create, Read , Update, Delete
const router = require('express').Router();

// api/thoughts

// GET all thoughts
// CREATE a new thought
const {
    getOneThought,
    getAllThoughts,
    createThought,
    deleteThought,
} = require ('../../controllers/thoughtController')
//Thoughts Model requires: thoughtID, thoughtText, username

// GET specific thought 
// GET ALL thoughts
// CREATE a New thought
// DELETE a specific thought


// future-state UPDATE-POST an existing thought

// CREATE a new reaction to another user's thought
const {
    getAllReactions,
    getOneReaction,
    createReaction,
    deleteReaction,
} = require ('../../controllers/usersReaction')

//Reactions Model requires: reactionID as ObjectId, reactionBody as string & required and a username

// For a single thought/User, get all reactions
// For a single thought/User, get one specific thought
// CREATE a new reaction to a user's thought
// DELETE a specific reaction from a user's thought posting

// future-state UPDATE-POST an existing reaction to a thought -- DELETE all reactions

module.exports = router;