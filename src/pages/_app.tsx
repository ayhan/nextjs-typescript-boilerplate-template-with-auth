import "@/styles/globals.css";

import type { AppProps } from "next/app";
import type { SWRConfiguration } from "swr";
import { SWRConfig } from "swr";

import AuthProvider from "@/context/auth";
import fetcher from "@/service/fetcher";

const swrOptions: SWRConfiguration = {
  fetcher,
  errorRetryCount: 0,
  revalidateOnFocus: false,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        ...swrOptions,
      }}
    >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </SWRConfig>
  );
}
