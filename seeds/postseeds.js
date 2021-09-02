const {Post} = require("../models");

const post = [
  {
    id: 1,
    post_header: "Using Javascript",
    post_content: "Knowing how to use Javascript is very important in web development.",
    user_id: 1
  },
  {
    id: 2,
    post_header: "Understanding MySQL",
    post_content: "Learning how to use MySQL and will benefit you in your career",
    user_id: 2
  },
  {
    id: 3,
    post_header: "Commiting Using Git",
    post_content: "Committing in git is essential to the work flow of your porjects",
    user_id: 3
  },
];
const postseeds = () => Post.bulkCreate(post);

module.exports = postseeds;