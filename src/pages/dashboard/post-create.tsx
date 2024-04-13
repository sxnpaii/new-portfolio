//react & next modules/packages/hooks/components
import { useState } from "react";
// xata
import { xataClientReq } from "@/new-portfolio/xata/xataRequest";
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
    published_date: new Date().toISOString(),
    cover_img: [
      {
        name: null,
        mediaType: null,
        base64Content: null,
      },
    ],
    tags: "",
  });
  //POST
  const insert = async (e) => {
    e.preventDefault();

    // POST request
    try {
      const fromServer = xataClientReq.db.Posts.create({
        ...newPost,
        tags: newPost.tags.split(" "),
        cover_img: newPost.cover_img[0],
      });
      return fromServer;
    } catch (err) {
      console.error(err);
    }
    //modal false
    setModal(false);
  };

  if (insert) {
    return (
      <MainLayout>
        <PageTitle title={`Создание Постов`} description={``} />
        {/* body */}
        <PostForm states={{ newPost, setNewPost, setModal }} />
        <Modal states={{ modal, setModal }} func={insert} />
      </MainLayout>
    );
  } else <h1>Test error message </h1>;
};
export default Dashboard;
