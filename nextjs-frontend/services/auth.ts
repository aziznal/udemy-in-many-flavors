import { backendApi } from "@/api/client-api";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
};

export const sendLoginRequest = async (credentials: LoginRequest) => {
  const response = await backendApi.post<LoginResponse>(
    "/auth/login",
    credentials
  );

  return response.data;
};
