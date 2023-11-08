//react & next modules/packages/hooks/components
import { useState } from "react";

//xata
import { XataClient } from "@/new-portfolio/xata";

const xata = new XataClient({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    enableBrowser: true
})
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
import Modal from "@/new-portfolio/components/Modal";
import Post from "@/new-portfolio/components/Post";
// sections
import PostForm from "../../sections/DashboardPage/PostForm";
//styles
import sass from "@/new-portfolio/styles/pages/Dashboard.module.scss";

const Dashboard = (): JSX.Element => {
    //MODAL STATE
    const [modal, setModal] = useState(false);
    const [newPost, setNewPost] = useState({
        title: null,
        description: null,
        content: null,
        published_date: new Date(),
        cover_img: [{
            name: null,
            mediaType: null,
            base64Content: null
        }],
        tags: "",
    })
    //POST
    const insert = async (e) => {
        e.preventDefault();

        // POST request
        "use server"
        await xata.db.Posts.create({
            ...newPost,
            tags: newPost.tags.split(" "),
            cover_img: newPost.cover_img[0]
        })
        //modal false
        setModal(false)
    }
    return (
        <MainLayout>
            <PageTitle title={`Создание Постов`} description={``} />
            {/* body */}
            <PostForm states={{newPost, setNewPost, setModal}}/>
            <Modal
                states={{modal, setModal}}
                func={insert}
            />
        </MainLayout>
    )
}
export default Dashboard;