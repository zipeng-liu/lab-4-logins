const express = require("express");
const bodyParser = require("body-parser")

const db = require("./fake-db")

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  let user = null;              // hmn, this line probably needs to change, if only we had a way to know who the user is
  res.render("index", { user })
})

app.get("/login", (req, res) => {
  res.render("login", {})
})

app.post("/login", (req, res) => {
  let givenUsername = req.body.username;
  let givenPassword = req.body.password;

  console.log(`user logged in, username: ${givenUsername} ; password : ${givenPassword} `)

  // I guess now that we know who the user is, we can do something?


  res.redirect("/");
})





app.listen(PORT, () => console.log(`server should be running at http://localhost:${PORT}/`))