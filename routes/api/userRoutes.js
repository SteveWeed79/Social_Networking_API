const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  removeThought,
  removeFriend,
  addFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// // /api/users/:userId/
// router.route("/:userId/assignments").post(updateUser);

// // /api/users/:userId/thought/:thoughtId
// router.route("/:userId/thoughts/:thoughtId").delete(removeThought);
router.route("/:userId/friends/:friendId").delete(removeFriend).post(addFriend);

module.exports = router;
