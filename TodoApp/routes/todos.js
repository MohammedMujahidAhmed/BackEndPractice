const express = require('express');


const router = express.Router();

//this is where to post the data for perticular route
const createTodo = require('../Controller/createTodo');
const {getTodo , getTodoById} = require('../Controller/getTodo');
const updateTodo = require('../Controller/updateTodo');
const deleteTodo = require('../Controller/deleteTodo');

router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);


module.exports = router;
