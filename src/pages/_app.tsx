import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
// styles
import "@/new-portfolio/styles/globals.scss";
import "locomotive-scroll/dist/locomotive-scroll.css";
//types
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/personal/logo.svg" />
      </Head>
      <NextNProgress color="white" options={{ showSpinner: false }} />
        <Component {...pageProps} />
    </>
  );
}
