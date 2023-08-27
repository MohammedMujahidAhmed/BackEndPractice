const Post = require('../modules/postModule');


exports.createPost = async (req,res) =>{
    try{
        const {title,body} = req.body;
        const post = new Post({
            title,body
        });
        const savedPost = await post.save();
    
        res.json({
            post:savedPost
        })
    }
    catch(error){
        console.log('error while creating post');
        return res.status(500).json({
            error:'Error while creating post'
        })
    }
}


exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find().populate('comments').exec();
        res.json({
            posts,
        })
    } catch (error) {
        console.log('error while getting all posts');
        return res.status(500).json({
            error:'Error while geatting all posts'
        })
    }
}