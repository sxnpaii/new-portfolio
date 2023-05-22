import Link from "next/link";
import { getXataClient, Posts } from "@/new-portfolio/xata";
import MainLayout from "@/new-portfolio/components/MainLayout";
//styles
import sass from "@/new-portfolio/styles/pages/Tags.module.scss";

export const getServerSideProps = async () => {
    const xata = getXataClient()
    const posts: Posts[] = await xata.db.Posts.select(["tags"]).getAll();
    console.log(posts);
    return {

        props: {
            posts
        }
    }
}
const Tags = ({ posts }: { posts: Posts[] }) => {
    return (
        <MainLayout>
            <div className={`${sass.Head} `}>
                <h2 className={`${sass.Heading} heading-text `}>
                    Теги
                </h2>
                <p className={`${sass.Description} basic-text `}>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ad beatae, cumque ipsum laboriosam minima odit officia optio reprehenderit similique
                    ullam!</p>
            </div>
            <ul className={`${sass.Tags} `}>
                {posts.map((post) => (
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
                ))}
            </ul>
        </MainLayout>
    )
}
export default Tags