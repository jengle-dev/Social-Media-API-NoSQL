//CRUD - Create, Read , Update, Delete
// formatted JSON
// if user status is author allow update/delete, else don't
const router = require('express').Router();

const {
    addFriend,
    deleteFriend
} = require ('../../controllers/usersFriends')

const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUserData,
} = require ('../../controllers/userController');

// /api/users

// CREATE new user
// New user requires username & email and both are unique
router.route('/').get(getAllUsers).post(createUser);

// GET specific user getSingleUser and ability to delete that specific user
router.route('/:_id').get(getSingleUser);

// PUT Update User using ID to search
router.route('/:_id').put(updateUserData);

// .delete(deleteUser);
router.route('/:_id').delete(deleteUser);

//POST a friend to a user
router.route('/:userId/friends/:friendId').post(addFriend);

// Delete a friend from a user's list of friends
router.route('/:userId/friends/:friendId').delete(deleteFriend);


module.exports = router;