
import Link from "next/link";
import sass from "@/new-portfolio/styles/components/Post.module.scss";

const Post = ({post}): JSX.Element => {

    return (
        <div className={`${sass.Post}`}>
            <Link href={`/posts/${post.id}`}>
                <img src={post.img_cover_url} alt=""/>
            </Link>
            <div className={`${sass.PostBody}`}>
                <div className={`${sass.PostHeading} flexbox`}>
                    <h3 className={`${sass.PostTitle} heading-text`}>{post.title}</h3>
                    <p className={`${sass.PostDate} basic-text`}>{post.published_date}</p>
                    {/*<div className="icons">*/}

                    {/*</div>*/}
                </div>
                <p className={`${sass.PostDescription} basic-text`}>{post.description}</p>
                <div className={`${sass.PostFooter} flexbox`}>
                    <Link href={`/posts/${post.id}`} className={` ${sass.PostLink} btn`}>Read More</Link>
                    <div className={`${sass.Tags} flexbox gap-2`}>{post.tags.map((tag) => (
                        <Link href={`/tags/${tag}`} key={tag} className={`${sass.PostTag} basic-text `}>#{tag}</Link>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post