import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoutes({children}) {
    const {user} = useAuth()
    const token = localStorage.getItem('token');
  return token && user ? children : <Navigate to="/" replace />
}
