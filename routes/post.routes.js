const express = require("express");
const router = express.Router();
const postController = require("../controllers/user.controller");

router.post("/post,", postController.createPost);
router.get("/post", postController.getPostByUser);


module.exports = router;
