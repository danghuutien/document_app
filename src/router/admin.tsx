
import Home from "@/pages/admin/Home";
import App from "@/pages/admin/layouts/App";
import Login from "@/pages/admin/login/Login";

export const adminRoutes = {
    path: "/admin",
    children: [
        {
            path: "login",
            element: <Login />,
        },
        {
            element: <App />,
            children: [
                { path: "", element: <Home /> },
            ],
        },
    ],
};

export default adminRoutes