
import { useState } from "react";
import { Posts, XataClient } from "@/new-portfolio/xata";
//components
import Post from "@/new-portfolio/components/Post";
import Modal from "@/new-portfolio/components/Modal";
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";

//enable browser
const xata = new XataClient({
    apiKey: "xau_6ERkGTFFVkgmdJ9OusDimEDrgrvcNqvm2",
    enableBrowser: true
})


export const getServerSideProps = async () => {
    //GET
    const posts: Posts[] = await xata.db.Posts.getAll();
    return {
        props: {
            posts: posts.map(post => ({
                ...post,
                published_date: post.published_date.toDateString()
            }))
        }
    }

}

const PostDelete = ({ posts }: { posts: Posts[] }) => {
    const [modal, setModal] = useState(false);
    //  DELETE
    const remove = async (post) => {
        // DELETE request
        await xata.db.Posts.delete(post.id)
        setModal(false)
    }
    return (
        <MainLayout>
            <PageTitle title={"Удаление Постов"} />
            <div className={posts != 0 ? `sm:columns-2 lg:columns-3` : ""}>
                {posts != 0 ? posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                        editable
                        funcs={{ remove }}
                        states={{ setModal }}
                    />
                )) : <p className={`basic-text text-center text-4xl opacity-70 my-24`}> // Нету постов для удаления </p>}
            </div>
            <Modal
                states={{ modal, setModal }}
                // func={remove}
                message={"Пост удалён !"}
            />
        </MainLayout>
    )
}

export default PostDelete