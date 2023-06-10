//react & next modules/packages/hooks/components
import {useState} from "react";

//xata
import {getXataClient, Posts, XataClient} from "@/new-portfolio/xata";

const xata = new XataClient({
    apiKey: "xau_6ERkGTFFVkgmdJ9OusDimEDrgrvcNqvm2",
    enableBrowser: true
})
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
import Post from "@/new-portfolio/components/Post";
// sections
import PostForm from "../../sections/DashboardPage/PostForm";
//styles
import sass from "@/new-portfolio/styles/pages/Dashboard.module.scss";
import Modal from "@/new-portfolio/components/Modal";
//data fetching
//     const xata = getXataClient();
export const getServerSideProps = async () => {
    //GET
    const posts: Posts[] = await xata.db.Posts.getAll();
    //POST

    return {
        props: {
            posts: posts.map(post => ({
                ...post,
                published_date: post.published_date.toDateString()
            }))
        }
    }

}

const PostCreate = ({posts}: { posts: Posts[] }): JSX.Element => {
    //MODAL STATE
    const [modal, setModal] = useState(false);
    const [newPost, setNewPost] = useState({
        title: null,
        description: null,
        content: null,
        published_date: new Date(),
        img_cover_url: null,
        tags: "",
    })
    //POST
    const insert = async (e) => {
        e.preventDefault();
        // POST request
        await xata.db.Posts.create({
            title: newPost.title,
            description: newPost.description,
            content: newPost.content,
            published_date: new Date(),
            img_cover_url: newPost.img_cover_url,
            tags: newPost.tags.split(" "),
        })
        //modal false
        setModal(false)
    }
    return (
        <MainLayout>
            <PageTitle title={`Создание Постов`} description={`lorem20`}/>
            {/* body */}
            <PostForm states={{newPost, setNewPost, setModal}}/>
            <Modal
                states={{modal, setModal}}
                func={insert}
            />
        </MainLayout>
    )
}
export default PostCreate;