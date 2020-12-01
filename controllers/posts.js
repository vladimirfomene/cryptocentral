const { Post } = require("../models/Post");
const moment = require("momment");

exports.createPost = async (req, res) => {
  try {
    req.body.createdAt = moment().format("YYYY-MM-DD hh:mm:ss");
    req.body.updatedAt = moment().format("YYYY-MM-DD hh:mm:ss");
    const insertedPost = await Post.query().insert(req.body);
    return res.status(200).json(insertedPost);
  } catch (err) {
    return res.status(500).json({ error: err, msg: "post creation failed" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.query();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(400).json({ error: err, msg: "could not get posts" });
  }
};

exports.getPost = async (req, res) => {
  try {
    const postId = parseInt(req.query.id);
    if (typeof postId !== "number") {
      return res.status(400).json({ msg: "Invalid post id" });
    }
    const post = await Post.query().findById(postId);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(400).json({ error: err, msg: "could not get post" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    if (typeof postId !== "number") {
      return res.status(400).json({ msg: "Invalid post id" });
    }
    const post = await Post.query().deleteById(postId);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(400).json({ error: err, msg: "could not get post" });
  }
};
