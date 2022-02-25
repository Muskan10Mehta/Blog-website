const router = require("express").Router();
const User = require("./../models/User");
const Post = require("./../models/Post");
const bcrypt = require("bcrypt");

router.put("/:id", async (req, res) => {
  console.log("Sending the response of the put request");
  res.setHeader("Content-Type", "application/json");

  console.log("ok1");
  console.log(req.params.id);
  console.log(req.body.userId);
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    console.log("ok2");

    try {
      const user = await User.findById(req.params.id);
      console.log("ok3");
      const updateAuthor = {
        $set: {
          username: req.body.username,
        },
      };
      console.log("ok4");
      await Post.updateMany({ username: user.username }, updateAuthor);
      console.log("ok5");
      res.status(200).send("updated username");

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          //   set everything inside the body
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).send(updatedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.status(401).send("You cannot update this account.");
  }
});

router.delete("/:id", async (req, res) => {
  console.log("Sending the response of the put request");
  res.setHeader("Content-Type", "application/json");

  try {
    const user = await User.findById(req.params.id);
    if (req.body.userId === req.params.id) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User Deleted");
      } catch (err) {
        res.status(400).send(err);
      }
    } else {
      res.status(401).send("You cannot delete this account.");
    }
  } catch (err) {
    res.status(401).send("User not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
