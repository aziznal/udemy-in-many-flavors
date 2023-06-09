import axios, { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

export const clientPublicBackendApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// This is a function to make sure the newest token is used every call
export function clientAuthenticatedBackendApi(): AxiosInstance {
  const accessToken = getCookie(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME);

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
