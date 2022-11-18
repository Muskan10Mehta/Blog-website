const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());
app.use("/postImages", express.static(path.join(__dirname, "/postImages")));
app.use("/fetch/auth", authRoute);
app.use("/fetch/users", userRoute);
app.use("/fetch/posts", postRoute);
app.use("/fetch/categories", categoryRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  // callback function take care of errors
  destination: (req, file, callback) => {
    callback(null, "postImages");
  },
  filename: (req, file, callback) => {
    callback(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/fetch/upload", upload.single("file"), (req, res) => {
  res.status(200).send("File uploaded!");
});

app.listen("3001", () => {
  console.log("Backend is running at port 3001");
});
