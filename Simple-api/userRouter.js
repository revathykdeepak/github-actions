
const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

// can add authorizations and validations

router.route("/")
.get(userController.getUsers)
.post(userController.createUser);

router.route("/:userId")
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;