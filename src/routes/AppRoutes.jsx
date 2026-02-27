import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    },
    {
        path: '*',
        element: <NotFound />
    }
])


export default router