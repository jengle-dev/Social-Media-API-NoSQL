//CRUD - Create, Read , Update, Delete
const router = require('express').Router();


// api/thoughts

// GET all thoughts
// CREATE a new thought
const {
    addThought,
    removeThought,
    // getAllThoughts,
    getOneThought
} = require ('../../controllers/thoughtController')

// future state UPDATE-POST an existing thought

// CREATE a new reaction to another user's thought
const {
    addReaction,
    getAllReactions,
    removeReaction,
}
// CREATE a new reaction to same user's thought

// UPDATE-POST an existing reaction to a thought

// GET specific thought to DELETE a specific reaction
// GET specific thought to DELETE all reactions

module.exports = router;