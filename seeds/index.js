require("dotenv").config();
const sequelize = require("../config/connection");
const comments = require("./commentseeds");
const post = require("./postseeds");
const user = require("./userseeds");

sequelize.sync({ force: true}).then(async () => {
   await user();

   await post();

   await comments();
});
