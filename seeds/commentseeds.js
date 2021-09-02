const { Comment } = require("../models");

const comment = [
  {
    id:1,
    content: "Thius post was very informational! it helped me so much! Thank You!",
    post_id: 1,
    user_id: 1,

  },
  {
    id:2,
    content: "I really understand where you're coming from on this.",
    post_id: 2,
    user_id: 2

  },
  {
    id:3,
    content: "This is truly inspirational",
    post_id: 3,
    user_id: 3
  },
];

const commentseeds = () => Comment.bulkCreate(comment);

module.exports = commentseeds;