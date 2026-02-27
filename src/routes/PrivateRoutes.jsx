import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({children}) {
    const token = localStorage.getItem('token');
    const {user} = useAuth();
  return token && user ? children : <Navigate to="/" replace />
}
