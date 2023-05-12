const express = require("express");
const db = require("./db");

const app = express();

app.use(express.static("public"));

app.get("/get-posts", (req, res) => {
  const { login, password } = req.query;

  if (db.checkAuth(login, password)) {
    res.json(db.getUserPosts(login));
  }
});

app.listen(8080, () => {
  console.log(`Example app listening`);
});
