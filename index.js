const express = require('express');
const cors = require('cors');
const users = require('./data/users.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Users management server started"));
app.get("/users", (req,res) => res.send(users))
app.post("/users", (req, res) => {
    users.push(req.body);
    res.send(users)
})

app.listen(port)