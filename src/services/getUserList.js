import axios from "axios";
import path from './baseURL-path'
    //Users tablosundan kullanıcı bilgilerini alma.
    const usersList = async () => {
        try{
            const response = await axios.get(`${path._baseURL}/users`);
            const result = await response.data;
            return result;
        }
        catch (error) { console.log("API'den veri çekilirken bir hata oluştu! Lütfen kontrol ediniz..") }
    }
    
export default {usersList}


