import { login } from "@/api/auth";
import type { LoginPayload } from "@/types/auth";

export const handleLogin = async (formData: LoginPayload) => {
    try {
        const response = await login(formData);
        localStorage.setItem('login_token', response.data.token);
    } catch (error) {
        throw error;
    }
};