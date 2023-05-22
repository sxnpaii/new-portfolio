//react & next modules/hooks/components
import Link from "next/link";
// import {useRouter} from "next/router";
import {useState} from "react";
//xata
import {getXataClient, Posts} from "@/new-portfolio/xata";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
//sections
import Post from "@/new-portfolio/components/Post";
//styles
import sass from "@/new-portfolio/styles/pages/Posts.module.scss";

//receive data from xata
export const getServerSideProps = async () => {
    const xata = getXataClient();
    const records: Posts[] = await xata.db.Posts.getAll(
        // {pagination: {size: 10}}
    )
    //send to client
    return {
        props: {
            records: records.map((record) => {
                return ({
                    ...record,
                    published_date: record.published_date.toDateString()
                });
            }),

        }
    }
}
// UI
const Posts = ({records}: { records: Posts[] }): JSX.Element => {
    return (
        <MainLayout>
            <div className={sass.Head}>
                <h2 className={` ${sass.Heading} heading-text`}>Посты</h2>
                <p className={`${sass.Description} basic-text`}>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Amet culpa eaque eveniet facilis magni nesciunt nostrum, omnis perferendis quibusdam suscipit.
                    Nam, qui reprehenderit?</p>
            </div>
            <div className={`${sass.Posts}`}>
                {records.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
            <div className={`${sass.Footer} flexbox`}>
                <button
                    className={`${sass.btn} btn`}
                >
                    More
                </button>
            </div>

        </MainLayout>
    )
}

export default Posts;