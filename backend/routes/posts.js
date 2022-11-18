const router = require("express").Router();
const Post = require("./../models/Post");

// create post
router.post("/", async (req, res) => {
  console.log("Sending the response of the post request");
  res.setHeader("Content-Type", "application/json");
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

// update post
router.put("/:id", async (req, res) => {
  console.log("Sending the response of the put request");
  //res.setHeader("Content-Type", "application/json");
  try {
    const post = await Post.findById(req.params.id);

    if (post.username == req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).send(updatedPost);
      } catch (err) {
        res.status(401).send(err);
      }
    } else {
      res.status(401).send("You can't update this post.");
    }

    res.status(200).send(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete post
router.delete("/:id", async (req, res) => {
  console.log("Sending the response of the put request");
  res.setHeader("Content-Type", "application/json");

  try {
    const post = await Post.findById(req.params.id);

    if (post.username == req.body.username) {
      try {
        await post.delete();
        res.status(200).send("Post has been deleted...");
      } catch (err) {
        res.status(401).send(err);
      }
    } else {
      res.status(401).send("You can't delete this post.");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get all posts
router.get("/", async (req, res) => {
  const username = req.query.user;
  const categoryName = req.query.category;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (categoryName) {
      posts = await Post.find({
        // checks the current categories with the category array we have in database with $in
        categories: {
          $in: [categoryName],
        },
      });
    } else {
      posts = await Post.find();
    }

    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
