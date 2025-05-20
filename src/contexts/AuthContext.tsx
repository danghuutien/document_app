import { createContext, useState, useEffect, type ReactNode, useContext } from 'react'

// 1. Interface cho user
interface User {
    id: number
    name: string
    email: string
}

// 2. Interface cho context
interface AuthContextType {
    user: User | null
    login: (userData: User) => void
    logout: () => void
    isAuthenticated: boolean
}

// 3. Tạo context mặc định
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 4. Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (userData: User) => {
        setUser(userData)
        localStorage.setItem('auth_user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('auth_user')
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('auth_user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    )
}