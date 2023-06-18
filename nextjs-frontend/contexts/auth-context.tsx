"use client";

import { LoginRequest, sendLoginRequest } from "@/services/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getCookie, setCookie, deleteCookie } from "cookies-next";

type AuthContextData = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
};

// these default values are meaningless but they are required because of the type
const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const checkIsAuthenticated = () => {
    return getCookie(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME) !== undefined;
  };

  const [authState, setAuthState] = useState<boolean | null>(null);

  const isLoading = useMemo<boolean>(() => authState === null, [authState]);

  useEffect(() => {
    setAuthState(checkIsAuthenticated());
  }, []);

  const isAuthenticated = useMemo<boolean>(() => !!authState, [authState]);

  const login = async (credentials: LoginRequest) => {
    const result = await sendLoginRequest(credentials);

    if (!result.accessToken) {
      throw new Error(
        "authentication failed because you messed it up, you dummy."
      );
    }

    setCookie(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME, result.accessToken);

    setAuthState(true);
  };

  const logout = () => {
    deleteCookie(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME);

    setAuthState(false);
  };

  const contextValues: AuthContextData = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
