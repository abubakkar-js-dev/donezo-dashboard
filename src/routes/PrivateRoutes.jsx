import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({children}) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
  return token && user ? children : <Navigate to="/" replace />
}
