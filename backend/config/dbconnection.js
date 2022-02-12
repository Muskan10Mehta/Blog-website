const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://webclassproject:jsToyourReact10@cluster1.gyhsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (err, success) {
    if (err) console.log("error connecting to database", err);
    else console.log("database connected successfully", success);
  }
);
