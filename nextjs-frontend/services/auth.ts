import { backendApi } from "@/api/client-api";
import { setCookie } from "cookies-next";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export const sendLoginRequest = async (credentials: LoginRequest) => {
  const response = await backendApi
        .post<LoginResponse>("/auth/login", credentials);
    setCookie("accessToken", response.data.accessToken, {
        path: "/",
    });
    return response.data;
};
