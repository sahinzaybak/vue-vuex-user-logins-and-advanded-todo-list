import axios from "axios";
import path from './baseURL-path'
    //Yeni kullanıcı.
    const addUser = async (userInfo) => {
        await axios.post(`${path._baseURL}/users/`, {
            userName:userInfo.setUserName,
            password:userInfo.setPassword,
        })
    }
    
export default {addUser}


