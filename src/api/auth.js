import api from "./axiosInstance";

export const loginUser = async (email,password) =>{
   return api.post('/api/login',{email,password});
}