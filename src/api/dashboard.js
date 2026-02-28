import api from "./axiosInstance";

export const getOverview = async() => api.get('/api/overview');
export const getUsers = async() => api.get('/api/users');
export const getAnalytics  = async() => api.get('/api/analytics');
export const getProducts   = async() => api.get('/api/products');

export const getDashboard = async() => api.get('/api/dashboard');