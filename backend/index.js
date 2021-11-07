var express = require("express");
var app = express();

const port = 5000;

app.get("/", function(request, response) {
   console.log(request);
   response.send("Hello world with root path");
});

app.listen(port, function() {
   console.log(`App listening on port ${port}`);
});
