import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    }
])


export default router