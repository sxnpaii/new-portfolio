import { ChildProcess } from "node:child_process";
import { ReactNode } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable("full", {
  html: true,
  breaks: true,
});

function renderMarkdownToHTML(markdown: string) {
  const renderedHTML = md.render(markdown);
  return { __html: renderedHTML };
}

export default function Md({
  markdown,
  className,
  children,
}: {
  markdown?: string;
  children?: ReactNode;
  className?: string;
}) {
  const markup = markdown ? renderMarkdownToHTML(markdown) : undefined;
  return (
    <>
      <div dangerouslySetInnerHTML={markup} className={className}>
        {children}
      </div>
    </>
  );
}
