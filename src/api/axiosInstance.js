import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Attach Token
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    };
    return config;
},(err)=>{
    return Promise.reject(err);
})


// Auto-logout on 401 and 403
api.interceptors.response.use(
    (res)=> res
,(err)=>{
    console.log(err)
    const status = err.response.status;
    console.log(status)
    console.log(status)
    if(status === 401 || status === 403){
        // log out user
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(err);
})

export default api;
