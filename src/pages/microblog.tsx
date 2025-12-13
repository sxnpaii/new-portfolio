import Head from "next/head";
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
// styles
import sass from "@/new-portfolio/styles/pages/Microblog.module.scss";
import { xataClientReq } from "../xata/xataRequest";
import { Posts } from "../xata/xata";
import Post from "../components/Post";
import dynamic from "next/dynamic";
const Masonry = dynamic(() => import("react-layout-masonry"), { ssr: false });

export const getServerSideProps = async () => {
  const records: Posts[] = await xataClientReq.db.Posts.sort(
    "published_date",
    "desc"
  ).getAll();
  //send to client
  return {
    props: {
      records: records.map((record) => {
        return {
          ...record,
          published_date: record.published_date.toDateString(),
        };
      }),
    },
  };
};
const Microblog = ({ records }: { records: Posts[] }) => {
  return (
    <MainLayout>
      <Head>
        <title>Микроблог || SXNPAII's Universe 🌌</title>
        <meta
          property="og:title"
          content={`Микроблог || SXNPAII's Universe 🌌`}
        />
      </Head>
      <PageTitle title={`Qisqa fikrlar`} />
      <section
      // className={`${sass.Microblog}`}
      >
        <Masonry columns={{ 250: 1, 350: 2, 1000: 3, 2400: 4 }} gap={10}>
          {records.length != 0 ? (
            records
              .filter((el) => !el.cover_img)
              .map((post) => <Post key={post.id} post={post} />)
          ) : (
            <p className={`${sass.Error} basic-text`}>
              Автор ещё не успел писать что-то интереснее ))
            </p>
          )}
        </Masonry>
      </section>
      <div className={`${sass.Footer} flexbox`}>
        <a
          href={`https://t.me/sxnpaii_blog`}
          className={`${sass.btn} btn flexbox gap-3`}
        >
          Больше в{" "}
          <img src="/icons/telegram.svg" width={23} height={23} alt="" /> канале
        </a>
      </div>
    </MainLayout>
  );
};

export default Microblog;
