import sass from "@/new-portfolio/styles/sections/HomePage/RandomPosts.module.scss";
import {getXataClient, Posts} from "@/new-portfolio/xata";

// export const getServerSideProps = async () => {
//     const xata = await getXataClient();
//     const records: Posts[] = xata.db.Posts.getMany()
//     return {
//         props: {
//             records: records.map((record)=>({
//                 ...record,
//                 published_date: record.published_date.toDateString()
//             }))
//         }
//     }
// }
export const RandomPosts = () => {
    return (
        <></>
    )
}