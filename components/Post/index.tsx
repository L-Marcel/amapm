import style from "./index.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import dayjs from "dayjs";

export type PostButton = {
  id: string;
  text: string;
  theme: "blue" | "gray";
  link: string;
};

export type PostContent = {
  id: string;
  title: string;
  publishedAt: string;
  author: string;
  body: string;
  buttons: PostButton[];
};

interface PostProps {
  content: PostContent;
};

export function Post({ content }: PostProps) {
  const { author, id, body, buttons, publishedAt, title } = content;
  const formattedPublishedAt = dayjs(publishedAt).format("DD/MM/YYYY");

  return (
    <article id={id} className={style.container}>
      <header>
        <h3>
          {title}
        </h3>
        <p>{formattedPublishedAt} — Por {author}</p>
      </header>
      <main>
        <Markdown 
          className={style.markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            "h1": "h4",
            "h2": "h5",
            "h3": "h6",
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
          {body}
        </Markdown>
      </main>
      <footer>
        {
          buttons.map(({ id, link, text, theme }) => {
            return (
              <a 
                key={id} 
                href={link} 
                role={theme}
                target="_blank"
              >
                {text}
              </a>
            );
          })
        }
      </footer>
    </article>
  );
};