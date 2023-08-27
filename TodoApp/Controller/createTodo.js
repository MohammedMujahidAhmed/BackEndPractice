
const Todo = require("../modules/Todo");

// this is where you write --> what you want to do with your data , the controller.
//for example in router.post("/routeaddress",(here the controller function below comes in picture))
//check for more clarity in routes as we require this in routes of todos

const createTodo = async (req,res)=>{
    try{
        const {title,description} = req.body;
        const Response = await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:Response,
            message:"Entry Created Successfully"
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

module.exports = createTodo;