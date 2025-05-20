import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react"

const Home = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);
    
    useEffect(() => {
        document.title = 'Dang huu tien'
    }, [])
    return (
            <>dsadsad</>
    )
}

export default Home