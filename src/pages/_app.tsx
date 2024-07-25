import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "@/providers/AuthProvider";

import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/inter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Nível Superior</title>
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
