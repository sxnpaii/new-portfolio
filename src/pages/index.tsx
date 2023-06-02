// react next modules
import Head from 'next/head'
import Image from 'next/image';
import {useRef, useState} from "react";
import {useRouter} from 'next/router';
//xata
import {getXataClient, Portfolio, Posts} from "@/new-portfolio/xata";
// loco scroll animations
import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import Footer from "@/new-portfolio/components/Footer"
// sections
import Hero from '../sections/HomePage/Hero';
import About from "@/new-portfolio/sections/HomePage/About";
import PortfolioSc from "@/new-portfolio/sections/HomePage/Portfolio";
import RandomPosts from "@/new-portfolio/sections/HomePage/RandomPosts";
// data from xata db
export const getServerSideProps = async () => {
    const xata = getXataClient();
    const records: Portfolio[] = await xata.db.Portfolio.getAll();
    const posts: Posts[] = await xata.db.Posts.getMany({
        pagination: {size: 3},
    });
    return {
        props: {
            records: records.map((record) => ({
                ...record,
                project: record.project?.toString(),
            })),
            posts:
                posts.map((post) => ({
                    ...post,
                    published_date: post.published_date?.toDateString()
                }))
        },
    }
}
export default function Home({records, posts}: { records: Portfolio[], posts: Posts[] }): JSX.Element {
    const {asPath} = useRouter()
    const containerRef = useRef()
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

            // location={asPath}
            containerRef={containerRef}
            watch={asPath}
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>SXNPAII's Universe 🌌</title>
                <meta property="og:title" content="SXNPAII's Universe 🌌"/>
                <meta property="og:description" content="Порфолио и Блог Front-end разработчика под ником SXNPAII"/>
            </Head>
            <main ref={containerRef}>
                <MainLayout>
                    <Hero/>
                    <About/>
                    <PortfolioSc records={records}/>
                    <RandomPosts posts={posts}/>
                    <Footer/>
                </MainLayout>
            </main>
        </LocomotiveScrollProvider>
    )
}
