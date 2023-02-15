import type { NextPage } from "next";
import { useState } from "react";

import { useAuth } from "@/context/auth";

const Login: NextPage = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <main>
      <h1>Login</h1>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
        className="border"
        type="text"
      />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
        className="border"
        type="text"
      />
      <button
        onClick={() => {
          login({ email, password });
        }}
        className="border bg-slate-300"
      >
        Login
      </button>
    </main>
  );
};

export default Login;
