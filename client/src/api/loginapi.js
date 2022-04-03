var express = require("express");
var fetch = require("node-fetch");
var app = express(); //include the module .this give us the capability the read the body.
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.post("/login", function (request, response) {
  let user1 = request.body.username;
  let passwd = request.body.password;
  var isUserEmailPresent = false;
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((e) => {
        if (e.email === user1) {
          isUserEmailPresent = true;
          if (e.password === passwd) {
            response.status(200).json("user authenticated");
            return;
          } else {
            response.status(400).json("Wrong password");
            // stop further execution in this callback
            return;
          }
        }
      });
      if (!isUserEmailPresent) {
        console.log("2" + user1, passwd);
        response.status(400).json("user does not exist");
        return;
      }
    });
});
app.listen(4000);
