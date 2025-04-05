import Link from "next/link";
import { Posts } from "@/new-portfolio/xata/xata";
import { xataClientReq } from "@/new-portfolio/xata/xataRequest";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
//styles
import sass from "@/new-portfolio/styles/pages/Tags.module.scss";
import Head from "next/head";
// filtering duplicate Tags
const filterTags = (posts: Posts[]) => {
  const filteredTags = new Set();
  posts.forEach((post) => post.tags.forEach((tag) => filteredTags.add(tag)));
  return [...filteredTags];
};

export const getServerSideProps = async () => {
  const posts: Posts[] = await xataClientReq.db.Posts.select(["tags"]).getAll();
  return {
    props: {
      tags: filterTags(posts),
    },
  };
};
const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <MainLayout>
      <Head>
        <title>Mavzular || SXNPAII's Universe 🌌</title>
      </Head>
      <PageTitle title={`Mavzular`} />
      {/*body*/}
      <ul className={tags.length != 0 ? `${sass.Tags} ` : ""}>
        {tags.length != 0 ? (
          tags.map((tag) => (
            <li key={tag} className={`flexbox flex-col text-center`}>
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className={`${sass.Tag} btn-primary `}
              >
                #{tag}
              </Link>
            </li>
          ))
        ) : (
          <p className={`${sass.Error} basic-text`}>Пока что нету тегов ..</p>
        )}
      </ul>
    </MainLayout>
  );
};
export default Tags;
