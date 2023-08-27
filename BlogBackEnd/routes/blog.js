const express = require('express');
const router = express.Router();

//Import Controller
const {createComment} = require('../controllers/commentController');
const {likePost, unLikePost} = require('../controllers/likeController');
const {createPost} = require('../controllers/postController')
const {getAllPosts} = require('../controllers/postController')

//Mapping Create
router.get('/dummyRoute',(req,res)=>{
    res.send(`<h1>This is dummy fine</h1>`);
})

router.post('/createComment',createComment);
router.post('/likes/like',likePost);
router.post('/createPost',createPost);
router.get('/posts',getAllPosts);
router.delete('/likes/unlike',unLikePost);

//export 
module.exports = router