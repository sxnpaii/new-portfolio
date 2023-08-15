import Link from "next/link";
import {XataClient, Posts} from "@/new-portfolio/xata";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
//styles
import sass from "@/new-portfolio/styles/pages/Tags.module.scss";
import Head from "next/head";

export const getServerSideProps = async () => {
    const xata = new XataClient({
        apiKey: process.env.NEXT_PUBLIC_API_KEY
    })
    const posts: Posts[] = await xata.db.Posts.select(["tags"]).getAll();
    // console.log(posts);
    return {
        props: {
            posts
        }
    }
}
const Tags = ({posts}: { posts: Posts[] }) => {
    return (
        <MainLayout>
            <Head>
                <title>Все теги || SXNPAII's Universe 🌌</title>
            </Head>
            <PageTitle title={`Теги`}/>
            {/*body*/}
            <ul className={posts != 0 ? `${sass.Tags} ` : ""}>
                {posts != 0
                    ?
                    posts.map((post) => (
                        <li key={post.id} className={`flexbox flex-col text-center`}>
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/tags/${tag}`}
                                    className={`${sass.Tag} btn-primary `}
                                >
                                    #{tag}
                                </Link>
                            ))}
                        </li>
                    ))
                    :
                    <p className={`${sass.Error} basic-text`}>Пока что нету тегов ..</p>}
            </ul>
        </MainLayout>
    )
}
export default Tags