const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    Author: { type: String, required: true },
    Location: String,
    Description: String,
    Image: String,
  },
  {
    timestamps: true,
  }
);

const PostModal = mongoose.model("Post", PostSchema);
module.exports = PostModal;
