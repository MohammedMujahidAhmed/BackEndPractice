

const Todo = require('../modules/Todo');

const getTodo = async (req,res)=>{
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"successfully fetched all data"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}

const getTodoById = async (req,res)=>{
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id : id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found for given id"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo id - ${id} data successfully fetched`
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}

module.exports = {getTodo , getTodoById};