const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  removeThought,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/
router.route("/:studentId/assignments").post(updateUser);

// /api/users/:userId/thought/:thoughtId
router.route("/:userId/thoughts/:thoughtId").delete(removeThought);

module.exports = router;
