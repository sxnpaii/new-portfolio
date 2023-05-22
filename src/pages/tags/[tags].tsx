import {getXataClient, Posts} from "@/new-portfolio/xata";
// components
import MainLayout from "@/new-portfolio/components/MainLayout";
import Post from "@/new-portfolio/components/Post";

export const getServerSideProps = async ({query}) => {
    const xata = getXataClient();
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
            <div className="Text mb-12">
                <h3 className={`heading-text text-5xl mt-32 mb-8`}>
                    По тегу "{query.tags}" найдены {PostsWithTags.map(post => post.tags).length} посты
                </h3>
                <p className={`basic-text`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus deserunt dolorum eaque eius, enim ex, harum optio perferendis porro quibusdam, rerum? Commodi consectetur doloremque maxime, obcaecati quam rem repellendus.</p>
            </div>
            <div className="Tags columns-2 md:columns-3">
            {PostsWithTags.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
            </div>
            {/*{console.log(PostsWithTags)}*/}
        </MainLayout>
    )

}

export default Tag;

