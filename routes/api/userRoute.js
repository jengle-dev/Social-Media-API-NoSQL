//CRUD - Create, Read , Update, Delete
// formatted JSON
// if user status is author allow update/delete, else don't
const router = require('express').Router();

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
// GET specific user create a new user
// New user requires username & email and both are unique
router.route('/').get(username).post(createUser);

// GET all users & all thoughts/posts
// GET all users & all thoughts/posts and filter by Date?

// GET specific user getSingleUser to delete that user
router.route('/:username').get(username).delete(deleteUser);
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
// TODO: Add Delete route that uses a filter to delete a single user by id/username
app.delete('/delete', (req, res) => {
    const bookId = new ObjectId(req.body.id)
    db.collection('bookCollection')
    .deleteOne({ _id: bookId })
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
  });

module.exports = router;