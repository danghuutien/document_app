import axiosInstance from "@/api/axios";
import type { LoginPayload } from "@/types/auth";

export const login = (credentials: LoginPayload) => axiosInstance.post('/api/login', credentials);
export const logout = () => axiosInstance.post('/logout');
// export const register = (data) => axiosInstance.post('/register', data);