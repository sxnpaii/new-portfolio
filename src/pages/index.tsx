// react next modules
import Head from "next/head";
import Image from "next/image";
import { RefObject, useRef, useState, type JSX } from "react";
//xata
import { Portfolio, Posts } from "@/new-portfolio/xata/xata";
import { xataClientReq } from "../xata/xataRequest";
// loco scroll animations
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import Footer from "@/new-portfolio/components/Footer";
// sections
import Hero from "../sections/HomePage/Hero";
import About from "@/new-portfolio/sections/HomePage/About";
import PortfolioSc from "@/new-portfolio/sections/HomePage/Portfolio";
import RandomPosts from "@/new-portfolio/sections/HomePage/RandomPosts";

// data from xata db
export const getServerSideProps = async () => {
  const records: Portfolio[] = await xataClientReq.db.Portfolio.getAll();
  const posts = await xataClientReq.db.Posts.sort(
    "published_date",
    "desc"
  ).getMany({
    pagination: { size: 3 },
  });
  return {
    props: {
      records: records.map((record) => ({
        ...record,
        project: record.project?.toString(),
      })),
      posts: posts.map((post) => ({
        ...post,
        published_date: post.published_date?.toDateString(),
      })),
    },
  };
};

export default function Home({
  records,
  posts,
}: {
  records: Portfolio[];
  posts: Posts[];
}): JSX.Element {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <LocomotiveScrollProvider
      containerRef={containerRef}
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`SXNPAII's Universe 🌌`}</title>
        <meta property="og:title" content="SXNPAII's Universe 🌌" />
        <meta
          property="og:description"
          content="Порфолио и Блог Front-end разработчика под ником SXNPAII"
        />
      </Head>
      <main ref={containerRef}>
        <MainLayout>
          <Hero />
          <About />
          <PortfolioSc records={records} />
          <RandomPosts posts={posts} />
          <Footer />
        </MainLayout>
      </main>
    </LocomotiveScrollProvider>
  );
}
