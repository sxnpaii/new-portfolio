import sass from "@/new-portfolio/styles/sections/DashboardPage/PostForm.module.scss";

const PostForm = ({states}) => {
    return (
        <form className={`${sass.Form} flexbox`}>
            <div className={`${sass.HeadEls} flexbox`}>
                <input
                    placeholder="Title"
                    className={`${sass.Title} heading-text`}
                    type="text"
                    onChange={(e) => (states.setNewPost({...states.newPost, title: e.target.value}))}/>
                <input
                    placeholder="Description"
                    className={`${sass.Description} basic-text`}
                    type="text"
                    onChange={(e) => (states.setNewPost({...states.newPost, description: e.target.value}))}/>
            </div>
            <input
                placeholder="Image Url"
                className={`${sass.ImageUrl} basic-text`}
                type="text"
                onChange={e => states.setNewPost({...states.newPost, img_cover_url: e.target.value})}/>
            <i className={`basic-text ${sass.Hint}`}>
                *Изображении хранится в одном <a target="_blank" href="" className="hover:underline">GitHub Repository</a>
            </i>
            <textarea
                placeholder="Content"
                className={`${sass.Content} basic-text`}
                onChange={(e) => (states.setNewPost({...states.newPost, content: e.target.value}))}/>
            <i className={`basic-text ${sass.Hint}`}>
                *Контент поста форматируется в языке разметки <a target="_blank" href="https://www.markdownguide.org/basic-syntax/" className="hover:underline">MarkDown</a>
            </i>
            <input
                placeholder="Tags"
                className={`${sass.Tags} basic-text`}
                type="text"
                onChange={(e) => (states.setNewPost({...states.newPost, tags: e.target.value}))}/>
            <i className={`basic-text ${sass.Hint}`}>*Теги должны быть разделены с помощью ПРОБЕЛа</i>
            <button
                className={`${sass.Btn} btn`}
                type={`submit`}
                onClick={(event) => (event.preventDefault(), states.setModal(true))}
            >
                Oпубликовать
            </button>
        </form>
    )
}

export default PostForm;