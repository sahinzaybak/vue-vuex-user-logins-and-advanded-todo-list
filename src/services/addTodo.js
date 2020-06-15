import axios from "axios";
import path from './baseURL-path'
    //yeni todo ekleme.
    const fetchAdd = async (todoItem,userID) => {
        let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        await axios.post(`${path._baseURL}/todoList/`, {
            userid: userID,
            created_date: currentDate,
            todo:todoItem,
            state:0
        })
    }
    
export default {fetchAdd}


