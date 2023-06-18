import { backendApi } from "@/api/client-api";

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  fullname: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type RegisterResponse = {
  accessToken: string;
};

export const sendLoginRequest = async (credentials: LoginRequest) => {
  const response = await backendApi.post<LoginResponse>(
    "/auth/login",
    credentials
  );

  return response.data;
};

export const sendRegisterRequest = async (credentials: RegisterRequest) => {
  const response = await backendApi.post<RegisterResponse>(
    "/user",
    credentials
  );

  return response.data;
};
