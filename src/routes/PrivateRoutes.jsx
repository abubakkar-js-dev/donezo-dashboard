import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({children}) {
    const {user} = useAuth();
  return user ? children : <Navigate to="/" replace />
}
