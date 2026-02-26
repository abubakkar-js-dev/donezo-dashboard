import React from 'react'
import AuthContext from '../context/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

export default function AuthProvider({children}) {
    
    const [user,setUser] = useState(()=> JSON.parse(localStorage.getItem('user')));
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const login = async (email,password) => {
        setLoading(true);
        setError('');

        try {
            const {data} = await loginUser(email,password);

            localStorage.setItem('token', data.token);
            localStorage.setItem('user',JSON.stringify(data))

            setUser(data);
            navigate('/dashboard');

        } catch (error) {
            setError(error.message || 'Invalid email or password');
        }finally{
            setLoading(false);
        }
    }

    const logOut = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setUser(null);
        navigate('/');
    }

  return (
    <AuthContext.Provider value={{user,login,logOut,loading,error}}>
        {children}
    </AuthContext.Provider>
  )
}
