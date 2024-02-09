//react & next modules/hooks/components
import Link from "next/link";
import Head from "next/head";
//xata
import { Posts } from "@/new-portfolio/xata/xata";
import { xataClientReq } from "@/new-portfolio/xata/xataRequest";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
//sections
import Post from "@/new-portfolio/components/Post";
//styles
import sass from "@/new-portfolio/styles/pages/Posts.module.scss";

//receive data from xata
export const getServerSideProps = async () => {
  const records: Posts[] = await xataClientReq.db.Posts.sort("published_date", "desc").getAll();
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
// UI
const Posts = ({ records }: { records: Posts[] }): JSX.Element => {
  return (
    <MainLayout>
      <Head>
        <title>Все Посты || SXNPAII's Universe 🌌</title>
        <meta
          property="og:title"
          content="Все Посты || SXNPAII's Universe 🌌"
        />
        <meta
          property="og:description"
          content="Порфолио и Блог Front-end разработчика под ником SXNPAII"
        />
      </Head>
      <PageTitle
        title={`Посты`}
        description={`Здесь будет показано все посты, находящиеся на сайте, в котором написано с максимальной творческой силой`}
      />
      {/* body */}
      <div
        className={
          records != 0
            ? records.length <= 4
              ? "sm:columns-2"
              : `${sass.Posts}`
            : ""
        }
      >
        {records != 0 ? (
          records.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p className={`${sass.Error} basic-text`}>
            Автор ещё не успел писать что-то интереснее ))
          </p>
        )}
      </div>
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

export default Posts;
