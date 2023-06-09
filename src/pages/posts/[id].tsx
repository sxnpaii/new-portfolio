//react & next modules/hooks/components
import Head from "next/head";
import Link from "next/link";
//xata
import {getXataClient, Posts} from "@/new-portfolio/xata";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import Md from "@/new-portfolio/components/Md";
import PageTitle from "@/new-portfolio/components/PageTitle";
//styles
import sass from "@/new-portfolio/styles/pages/Post.module.scss";
import {styles} from "@/new-portfolio/styles/Basics";
//data fetching
export const getServerSideProps = async ({params}) => {
    const xata = getXataClient();
    const post: Posts[] = await xata.db.Posts.read(`${params.id}`);
    if (!post) {
        return {
            notFound: true
        }
    }
    const content = {
        ...post,
        published_date: post.published_date?.toDateString()
    }
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
const Post = ({content}: { content: Posts[] }): JSX.Element => {

    return (
        <MainLayout>

            <Head>
                <title>{content.title} || SXNPAII`s Universe </title>
                <meta property="og:title" content={`${content.title}`}/>
                <meta property="og:image" content={`${content.img_cover_url}`}/>
            </Head>
            <main className={` ${sass.Main}`}>
                {/*<style scoped>{DefaultStyles}</style>*/}
                <PageTitle title={content.title} description={content.description}/>
                {/*body*/}
                <div className={`${sass.Body}`}>
                    <img
                        src={content.img_cover_url}
                        alt={content.img_cover_url}
                        className={`${sass.Img}`}
                    />
                    {/* content */}
                    <Md
                        markdown={content.content}
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
            {/*basic styles for this page*/}
            <style scoped jsx>
                {styles}
            </style>
        </MainLayout>
    )
}

export default Post;