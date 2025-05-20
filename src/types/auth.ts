export interface LoginPayload {
  usename: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}