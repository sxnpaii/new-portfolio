import {XataClient, Posts} from "@/new-portfolio/xata";
// components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
import Post from "@/new-portfolio/components/Post";
//styles
import sass from "@/new-portfolio/styles/pages/Tag.module.scss";
import Head from "next/head";

export const getServerSideProps = async ({query}) => {
    const xata = new XataClient({
        apiKey: process.env.NEXT_PUBLIC_API_KEY
    });
    const PostsWithTags: Posts[] = await xata.db.Posts.filter({tags: `${query.tags}`}).getAll()

    return {
        props: {
            query,
            PostsWithTags: PostsWithTags.map((post) => ({
                ...post,
                published_date: post.published_date.toDateString()
            }))
        }
    }
}

const Tag = ({query, PostsWithTags}: { query: {}, PostsWithTags: Posts[] }): JSX.Element => {
    return (
        <MainLayout>
            <Head>
                <title>Посты по тегу {query.tags} || SXNPAII's Universe 🌌</title>
            </Head>
            <PageTitle
                title={`По тегу "${query.tags}" найдены ${PostsWithTags.map(post => post.tags).length} посты`}
            />
            {/*body*/}
            <div className={`${sass.Posts}`}>
                {PostsWithTags.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </MainLayout>
    )

}

export default Tag;

