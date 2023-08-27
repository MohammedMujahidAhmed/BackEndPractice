
const Post = require('../modules/postModule')
const Like = require('../modules/likeModule')

exports.likePost = async (req,res) => {
    try{
        const {post,user} = req.body;

        const like = new Like({
            post,user
        });

        const savedlike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes : savedlike._id}},{new:true})
                                .populate("likes")
                                .exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        console.log('error while likeing post');
        return res.status(500).json({
            error:'Error while likeing post'
        })
    }
}

exports.unLikePost = async (req,res) => {
    try{
        const {post,like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        console.log('error while unlikeing post');
        return res.status(500).json({
            error:'Error while unlikeing post'
        })
    }
}