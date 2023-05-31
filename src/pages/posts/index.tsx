//react & next modules/hooks/components
import Link from "next/link";
// import {useRouter} from "next/router";
import {useState} from "react";
//xata
import {getXataClient, Posts} from "@/new-portfolio/xata";
//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
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
            <PageTitle
                title={`Посты`}
                description={`Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Amet culpa eaque eveniet facilis magni nesciunt nostrum, omnis perferendis quibusdam suscipit.
                   Nam, qui reprehenderit?`}/>
            {/* body */}
            <div className={records !=  0 ? `${sass.Posts}` : ''}>
                {records !=  0
                    ?
                    records.map((post) => (
                        <Post key={post.id} post={post}/>
                    ))
                    :
                    <p className={`${sass.Error} basic-text`}>Автор ещё не успел писать что-то интереснее ))</p>}
            </div>
            <div className={`${sass.Footer} flexbox`}>
                <a href={`https://medium.com/@sxnpaii`}
                    className={`${sass.btn} btn flexbox gap-3`}
                >
                    Больше постов в <img src="/icons/medium.svg" width={25} height={25} alt=""/>
                </a>
            </div>

        </MainLayout>
    )
}

export default Posts;