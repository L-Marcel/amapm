import MarkdownContainer from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./index.module.scss";
import { formatMarkdown } from "@/utils/formatMarkdown";

interface MarkdownProps {
  content: string;
}

export function Markdown({
  content
}: MarkdownProps) {
  return (
    <MarkdownContainer 
      className={style.container}
      remarkPlugins={[remarkGfm]}
      components={{
        "h1": "h4",
        "h2": "h5",
        "h3": "h6",
        a: ({ children, ...rest }) => {
          return (
            <a {...rest} target="_blank">
              {children}
            </a>
          );
        }, 
        table: ({ children, ...rest }) => {
          return (
            <div role="box">
              <div role="table">
                <table {...rest}>
                  {children}
                </table>
              </div>
            </div>
          );
        }
      }}
    >
      {formatMarkdown(content)}
    </MarkdownContainer>
  );
}