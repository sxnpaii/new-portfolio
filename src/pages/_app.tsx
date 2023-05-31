// styles
import '@/new-portfolio/styles/globals.scss'
import "locomotive-scroll/dist/locomotive-scroll.css"
//types
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
    <Component {...pageProps} />
    )
}
