//react & next modules/hooks/components
import Head from "next/head";
import Link from "next/link";
//xata
import { Posts } from "@/new-portfolio/xata/xata";
import { xataClientReq } from "@/new-portfolio/xata/xataRequest";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import Md from "@/new-portfolio/components/Md";
import PageTitle from "@/new-portfolio/components/PageTitle";
//styles
import sass from "@/new-portfolio/styles/pages/Post.module.scss";
import { styles } from "@/new-portfolio/styles/Basics";
import moment from "moment";
import type { JSX } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
//data fetching
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await xataClientReq.db.Posts.read(`${params.id}`);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      content: {
        ...post,
        published_date: moment(post.published_date).format(
          "LLLL"
        ),
      },
    },
  };
};
//ui
const Post = ({ content }: { content: Posts }): JSX.Element => {
  return (
    <MainLayout>
      <Head>
        <title>{content.title} || SXNPAII`s Universe </title>
        <meta property="og:title" content={`${content.title}`} />
        <meta property="og:description" content={`${content.description}`} />
        <meta
          property="og:image"
          content={`${content.cover_img && content.cover_img.url}`}
        />
      </Head>
      <main className={` ${sass.Main}`}>
        <PageTitle
          title={content.title ?? ""}
          description={content.description ?? ""}
          isPost
        />
        {/*body*/}
        <div className={`${sass.Body}`}>
          {content.cover_img && (
            <Image
              src={content.cover_img.url}
              className={`${sass.Img}`}
              alt="cover image"
              width={1000}
              height={400}
            />
          )}
          {/* content */}
          <Md
            markdown={content.content ?? ""}
            className={` ${sass.Content} basic-text `}
          />
          {/* footer */}
          <div className={sass.Footer}>
            <div className={`${sass.Tags}`}>
              <b className={`heading-text ${sass.Hint}`}>Mavzular:</b>
              {content.tags &&
                content.tags.map((tag) => (
                  <Link
                    href={`/tags/${tag}`}
                    key={tag}
                    className={`${sass.Tag} basic-text`}
                  >
                    #{tag}
                  </Link>
                ))}
            </div>
            <p className="basic-text">{content.published_date}</p>
          </div>
        </div>
      </main>
      {/*basic styles for this page*/}
      <style scoped jsx>
        {styles}
      </style>
    </MainLayout>
  );
};

export default Post;
