import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import Usuarios from "../pages/Usuarios"; // VSCode só importa automáticamente se o arquivo estiver aberto
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<AdminLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path:"/usuarios",
                element: <Usuarios/>
            },
        ]
    },


]);