import { Remarkable } from 'remarkable';

const md = new Remarkable("full", {
    html: true,
    breaks: true
});

function renderMarkdownToHTML(markdown?: string) {
    const renderedHTML = md.render(markdown);
    return { __html: renderedHTML };
}

export default function Md({ markdown, className }: { markdown?: string, className?: string }) {
    const markup = renderMarkdownToHTML(markdown);
    return (
        <>
            <div dangerouslySetInnerHTML={markup} className={className} />
        </>
    )
}
