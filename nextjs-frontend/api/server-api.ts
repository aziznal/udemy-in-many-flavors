import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";

export const serverPublicBackendApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// This is a function to make sure the newest token is used every call
export function serverAuthenticatedBackendApi(): AxiosInstance {
  const accessToken = cookies()
    .get(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME)
    ?.value;

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
