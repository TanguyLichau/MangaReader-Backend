const router = require("express").Router();
const userService = require("./users.service");
const passport = require("passport");
//require("../auth/jwt.strategy");
require("../auth/local.strategy");

router.post("/register", userService.registerUser);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userService.loginUser
);

router.get("/", userService.getAllUsers);

router.get("/me", getCurrentUser);

router.put("/me", updateCurrentUser);

router.delete("/me", deleteCurrentUser);

module.exports = router;
