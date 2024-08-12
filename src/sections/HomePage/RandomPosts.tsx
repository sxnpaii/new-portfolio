import sass from "@/new-portfolio/styles/sections/HomePage/RandomPosts.module.scss";
import { Posts } from "@/new-portfolio/xata/xata";
import Link from "next/link";

const RandomPosts = ({ posts }: { posts: Posts[] }): JSX.Element => {
  return (
    <section className={`${sass.RandomPosts}`} data-scroll-container>
      <div className={`${sass.HeadingText} `} data-scroll>
        <h3
          className={` ${sass.Heading} heading-text`}
          data-scroll
          data-scroll-speed="1.5"
        >
          Последние Посты
        </h3>
      </div>
      <div className={`${sass.Posts}`}>
        {posts.length != 0 ? (
          posts.map((post) => (
            <div key={post.id} className={`${sass.Post}`} data-scroll>
              {post.cover_img && (
                <Link href={`/posts/${post.id}`} className={`${sass.ImgLink}`}>
                  <img
                    src={post.cover_img.url}
                    alt=""
                    className={`${sass.Img}`}
                  />
                </Link>
              )}

              <div className={`${sass.PostBody}`}>
                <b className={`${sass.PostTitle} heading-text`}>{post.title}</b>
                <p className={`${sass.PostDescription} basic-text`}>
                  {post.description}
                </p>
                <div className={`${sass.PostFooter} flexbox`}>
                  <Link
                    href={`/posts/${post.id}`}
                    className={`${sass.Link} btn`}
                  >
                    Читать
                  </Link>
                  <ul className={`${sass.TagsUl} flexbox`}>
                    {post.tags.map((tag) => (
                      <li key={tag}>
                        <Link
                          href={`/tags/${tag}`}
                          className={`${sass.Tag} basic-text`}
                        >
                          #{tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={`${sass.Error} basic-text`}>
            Автор ещё не успел писать что-то интереснее ))
          </p>
        )}
      </div>
      <Link href={`/posts`} className={`${sass.Btn} btn`}>
        Все Посты
      </Link>
    </section>
  );
};

export default RandomPosts;
