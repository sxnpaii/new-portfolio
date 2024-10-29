import Link from "next/link";
import sass from "@/new-portfolio/styles/components/Post.module.scss";
import moment from "moment";
import "moment/locale/uz-latn";
const Post = ({ post, editable = false, funcs, states }): JSX.Element => {
  return (
    <div className={`${sass.Post}`}>
      {post.cover_img && (
        <Link href={`/posts/${post.id}`}>
          <img src={post.cover_img.url} alt={post.cover_img.name} />
        </Link>
      )}

      <div className={`${sass.PostBody}`}>
        <div className={`${sass.PostHeading} flexbox`}>
          <Link
            href={`/posts/${post.id}`}
            className={`${sass.PostTitle} heading-text flexbox`}
          >
            <div className={editable ? "flexbox gap-5" : "hidden"}>
              <button
                onClick={() => {
                  states.setModal(true), funcs.remove(post);
                }}
              >
                <img src="/icons/delete.svg" alt="" width={20} />
              </button>
            </div>
            {post.title}
          </Link>
          <p className={`${sass.PostDate} basic-text`}>
            {moment(post.published_date).format("DD MMMM YYYY")}
          </p>
        </div>
        <p className={`${sass.PostDescription} basic-text`}>
          {post.description}
        </p>
        <div className={`${sass.PostFooter} flexbox`}>
          <Link href={`/posts/${post.id}`} className={` ${sass.PostLink} btn`}>
            Read More
          </Link>
          <div className={`${sass.Tags} flexbox gap-2`}>
            {post.tags.map((tag) => (
              <Link
                href={`/tags/${tag}`}
                key={tag}
                className={`${sass.PostTag} basic-text `}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
