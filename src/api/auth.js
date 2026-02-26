import api from "./axiosInstance";

export const loginUser = async (email,password) =>{
    api.post('/api/login',{email,password});
}