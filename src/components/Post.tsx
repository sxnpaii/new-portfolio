import Link from "next/link";
import sass from "@/new-portfolio/styles/components/Post.module.scss";
import moment from "moment";
import "moment/locale/uz-latn";
import type { JSX } from "react";
import Image from "next/image";
import { Posts } from "../xata/xata";

type Props = {
  post: Posts;
  editable: boolean;
  funcs: unknown;
  states: unknown;
};

const Post = ({
  post,
  editable = false,
  funcs,
  states,
}: Props): JSX.Element => {
  return (
    <div className={`${sass.Post}`}>
      {post.cover_img && (
        <Link href={`/posts/${post.id}`}>
          <Image
            src={post.cover_img.url}
            alt={post.cover_img.name}
            width={0}
            height={0}
          />
        </Link>
      )}

      <div className={`${sass.PostBody}`}>
        <div className={`${sass.PostHeading} flexbox`}>
          <Link
            href={`/posts/${post.id}`}
            className={`${sass.PostTitle} heading-text flexbox`}
          >
            <div className={editable ? "flexbox gap-5" : "hidden"}>
              <button onClick={() => {}}>
                <Image
                  src="/icons/delete.svg"
                  alt=""
                  className="w-full h-auto"
                  width={20}
                  height={20}
                />
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
            {`To'liq o'qish`}
          </Link>
          <div className={`${sass.Tags} flexbox gap-2`}>
            {post.tags &&
              post.tags.map((tag: string) => (
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
