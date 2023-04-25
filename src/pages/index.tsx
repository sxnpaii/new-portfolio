// react next modules
import Head from 'next/head'
import Image from 'next/image';
import {useRef} from "react";
import {useRouter} from 'next/router';
// loco scroll animations
import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
// styles
// sections
import Hero from '../sections/HomePage/Hero';
import About from "@/new-portfolio/sections/HomePage/About";
import Portfolio from "@/new-portfolio/sections/HomePage/Portfolio";
import {getXataClient, portfolio, Posts} from "@/new-portfolio/xata";

//portfolio data from xata db
export const getServerSideProps = async () => {
    const xata = await getXataClient();
    const records: portfolio[] = await xata.db.portfolio.getMany();

    return {
        props: {
            records: records.map((record) => ({
                ...record,
                project: record.project?.toString(),
            })),
        },
    }
}
export default function Home({records}: portfolio[]) {
    const {asPath} = useRouter()
    const containerRef = useRef(null)
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                smartphone: {
                    smooth: true
                },
                tablet: {
                    smooth: true
                }
            }}
            location={asPath}
            containerRef={containerRef}
            // watch={[]}
        >
            <Head>
                <title>SXNPAII's Universe 🌌</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/personal/logo.svg"/>
            </Head>
            <main className=' text-white' ref={containerRef}>
                <MainLayout>
                    <Hero/>
                    <About/>
                    <Portfolio records={records}/>
                </MainLayout>
            </main>
        </LocomotiveScrollProvider>
    )
}
