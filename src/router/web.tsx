import Home from "@/pages/web/Home";
import App from "@/pages/web/layouts/App";

const webRoutes = {
    path: "/",
    element: <App />, // layout có thể bọc bằng AuthContext ở đây
    children: [
        {
            path: "",
            element: <Home />,
        }
    ],
}

export default webRoutes