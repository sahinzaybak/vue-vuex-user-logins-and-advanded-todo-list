import axios from "axios";
import path from './baseURL-path'
    //Listedeki todoları 'Tamamlananlar''a eklediğimizde state değerini 1 olarak değiştirme.
    const completeTodo = async (todoItem,userID) => {
        let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        await axios.put(`${path._baseURL}/todoList/${todoItem.id}`, {
            userid : userID,
            created_date: currentDate,
            todo:todoItem.todo,
            created:todoItem.created,
            state:1
        })
    }
    
export default {completeTodo}


