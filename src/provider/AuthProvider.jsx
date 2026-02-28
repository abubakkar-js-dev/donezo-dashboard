import { useState } from 'react';
import AuthContext from '../context/AuthContext';

import { loginUser } from '../api/auth';

export default function AuthProvider({children}) {
    
    const [user,setUser] = useState(()=> JSON.parse(localStorage.getItem('user')));
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState("");

    const login = async (email,password) => {
        setLoading(true);
        setError('');

        try {
            const {data} = await loginUser(email,password);
            const {token, ...userObj} = data;

            localStorage.setItem('token', token);
            localStorage.setItem('user',JSON.stringify(userObj))

            setUser(userObj);

        } catch (error) {
            const message = error?.response?.data?.message || error.message || 'Invalid email or password';
            setError(message);
            throw new Error(message);
        }finally{
            setLoading(false);
        }
    }

    const logOut = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        setUser(null);
    }

  return (
    <AuthContext.Provider value={{user,login,logOut,loading,error}}>
        {children}
    </AuthContext.Provider>
  )
}
