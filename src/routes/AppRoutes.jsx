import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/dashboard',
        element: <h2 className="text-2xl text-primary">Dashboard here</h2>
    }
])


export default router