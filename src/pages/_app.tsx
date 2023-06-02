// styles
import '@/new-portfolio/styles/globals.scss'
import "locomotive-scroll/dist/locomotive-scroll.css"
//types
import type { AppProps } from 'next/app';
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/personal/logo.svg"/>
            </Head>
    <Component {...pageProps} />
        </>
    )
}
