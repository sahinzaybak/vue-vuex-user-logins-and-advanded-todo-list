import axios from "axios";
import path from './baseURL-path'
    //Listeden todo silme
    const deleteTodo = async (todoItem) => {await axios.delete(`${path._baseURL}/todoList/${todoItem}`)}
export default {deleteTodo}


