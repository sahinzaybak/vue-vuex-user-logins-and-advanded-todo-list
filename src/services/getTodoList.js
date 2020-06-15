import axios from "axios";
import path from './baseURL-path'
    //json todolist tablosundan todo'ları çekme
    const getTodoList = async () => {
        try{
            const response = await axios.get(`${path._baseURL}/todoList/`);
            const result = await response.data;
            return result;
        }
        catch (error) { console.log("API'den veri çekilirken bir hata oluştu! Lütfen kontrol ediniz..") }
    }
    
export default {getTodoList}


