import { AuthProvider } from "@/contexts/AuthContext"
import AuthMiddleware from "@/middleware/AuthMiddleware"
import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <AuthProvider >
            <AuthMiddleware>
                <Outlet />
            </AuthMiddleware>
        </AuthProvider>
    )
}

export default App