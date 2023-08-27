
const Todo = require("../modules/Todo");

const deleteTodo = async (req,res)=>{
    try{
        const id = req.params.id;
        const todo= await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Todo Deleted"
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}

module.exports = deleteTodo;