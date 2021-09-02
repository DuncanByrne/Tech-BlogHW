const { User } = require("../models");

const users = [
  {
    id: 1,
    username: "Bart", 
    email: "bartsimpson@bart.com",
    password:"password"
  },
    {
    id: 2,
    username: "Dave",
    email: "daveisdave#dave.com",
    password: "password2"
  },
    {
    id: 3,
    username: "Duncan",
    email: "duncanduncan@duncan.com",
    password: "password3"
  },
];

const userseeds = () => User.bulkCreate(users);

module.exports = userseeds;