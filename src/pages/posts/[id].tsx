//react & next modules/hooks/components
import Head from "next/head";
import Link from "next/link";
//xata
import { getXataClient, Posts } from "@/new-portfolio/xata";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import Md from "@/new-portfolio/components/Md";
//styles
import sass from "@/new-portfolio/styles/pages/Post.module.scss";
//data fetching
export const getServerSideProps = async ({ params }) => {
    const xata = getXataClient();
    const post: Posts[] = await xata.db.Posts.read(`${params.id}`)as Posts;

    const content = {
        ...post,
        published_date: post.published_date?.toDateString()
    }
    console.log(post);
    return {
        props: {
            content: {
                ...post,
                published_date: post.published_date?.toDateString()
            }
        }
    }
}
//ui

const Post = ({ content }: { content: Posts[] }): JSX.Element => {
    return (
        <MainLayout>
            <Head>
                <title>{content.title} || SXNPAII`s Universe </title>
            </Head>
            <main className={` ${sass.Main} `}>
                <div className={`${sass.Heading} `}>
                    <h2 className={` ${sass.HeadingText} heading-text `}>{content.title}</h2>
                    <p className={`basic-text`}>{content.description}</p>
                </div>
                <div className={`${sass.Body}`}>
                    <img
                        src={content.img_cover_url}
                        alt={content.img_cover_url}
                        className={`${sass.Img}`}
                    />
                    {/* content */}
                    <Md markdown={content.content}
                        className={` ${sass.Content} basic-text `}
                    />
                    <div className={`${sass.Tags}`}>
                        <b className={`heading-text ${sass.Hint}`}>
                            Теги:
                        </b>
                        {content.tags.map(tag => (
                            <Link href={`/tags/${tag}`} key={tag} className={`${sass.Tag} basic-text`}>#{tag}</Link>
                        ))}
                    </div>
                </div>
            </main>

        </MainLayout>
    )
}

export default Post;