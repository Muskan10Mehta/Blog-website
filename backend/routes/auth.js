const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("./../models/User");

router.post("/signup", async (req, res) => {
  console.log("Sending the response of the post request");
  res.setHeader("Content-Type", "application/json");

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });

    const user = await newUser.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  console.log("Sending the response of the post request");
  res.setHeader("Content-Type", "application/json");

  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      res.status(400).send("Wrong credential");
    }

    const validate = await bcrypt.compare(req.body.password, user.password);

    if (!validate) {
      res.status(400).send("Wrong credential");
    }

    const { password, ...others } = user._doc;

    res.status(200).send(others);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
