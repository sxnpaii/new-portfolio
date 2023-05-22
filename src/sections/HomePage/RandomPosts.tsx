import sass from "@/new-portfolio/styles/sections/HomePage/RandomPosts.module.scss";
import { Posts } from "@/new-portfolio/xata";
import Link from "next/link";

const RandomPosts = ({ posts }: { posts: Posts[] }): JSX.Element => {
    return (
        <section className={`${sass.RandomPosts}`} data-scroll-container>
            <div className={`${sass.HeadingText} `} data-scroll>
                <h3 className={` ${sass.Heading} heading-text`} data-scroll data-scroll-speed="1.5">Рандомные Посты</h3>
                <p className={`${sass.Description} basic-text`} data-scroll data-scroll-speed="1">Lorem ipsum dolor sit
                    amet, consectetur adipisicing
                    elit. Amet esse
                    itaque iusto laudantium nam quasi rem sequi sunt suscipit voluptas!</p>
            </div>
            <div className={`${sass.Posts} `}>
                {posts.map((post) => (
                    <div key={post.id} className={`${sass.Post} `} data-scroll>
                        <Link href={`/posts/${post.id}`} className={`${sass.Img}`}>
                            <img src={post.img_cover_url} alt="" />
                        </Link>
                        <div className={`${sass.PostBody}`}>
                            <h6 className={`${sass.PostTitle} heading-text`}>{post.title}</h6>
                            <p className={`${sass.PostDescription} basic-text`}>{post.description}</p>
                            <div className={`${sass.PostFooter} flexbox`}>
                                <Link href={`/posts/${post.id}`} className={`${sass.Link} btn`}>Читать</Link>
                                <ul className={`flexbox`}>
                                    {post.tags.map(tag => (
                                        <li key={tag}>
                                            <Link href={`/tags/${tag}`}
                                                className={`${sass.Tag} basic-text`}>#{tag}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <Link href={`/posts`} className={`${sass.Btn} btn`}>Все Посты</Link>
        </section>
    )
}

export default RandomPosts;