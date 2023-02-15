import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, FC, useContext, useEffect, useState } from "react";
import useSWR from "swr";

import { ACCESS_TOKEN, IS_LOGIN } from "@/constants/auth";
import { ILoginForm, IUser } from "@/models/user";
import API from "@/service/instance";

interface IAuthContext {
  user: IUser | undefined;
  login: (body: ILoginForm) => Promise<void>;
  logout: () => void;
}

export const Auth = createContext<IAuthContext | null>(null);

interface IProps {
  children: JSX.Element;
}

const AuthProvider: FC<IProps> = (props) => {
  const { children } = props;
  const cookies = parseCookies();
  const router = useRouter();

  const [user, setUser] = useState<IUser | undefined>();

  const { data: userInfo } = useSWR<IUser>(
    cookies?.access_token ? `/api/user/userGetInfo` : null,
  );

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const login = async (body: ILoginForm) => {
    try {
      const login = await API.post("/auth", body);

      setCookie(null, ACCESS_TOKEN, login?.data.access_token, {
        path: "/",
        maxAge: 3600 * 1000 * 24 * 365,
      });

      setCookie(null, IS_LOGIN, "true", {
        path: "/",
        maxAge: 3600 * 1000 * 24 * 365,
      });

      return login;
    } catch (error: any) {
      console.error(error);
      return error.response;
    } finally {
      console.log("Finally Login");
    }
  };

  const logout = () => {
    try {
      document.cookie =
        ACCESS_TOKEN + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie =
        IS_LOGIN + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      router.push("/login");
    } finally {
      console.log("Logout Finally");
    }
  };

  return (
    <Auth.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth) as IAuthContext;

export default AuthProvider;
