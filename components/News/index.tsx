import { ComponentProps } from "react";
import { Button } from "../Button";
import { Markdown } from "../Markdown";
import style from "./index.module.scss";
import dayjs from "dayjs";

type ButtonProps = ComponentProps<typeof Button>;

export type NewsContent = {
  id: string;
  title: string;
  publishedAt: string;
  author: string;
  body: {
    markdown: string;
  };
  buttons: ButtonProps[];
};

interface NewsProps {
  content: NewsContent;
}

export function News({ content }: NewsProps) {
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
          content={body.markdown}
        />
      </main>
      <footer>
        {
          buttons.map(({ id, ...rest }) => {
            return (
              <Button 
                key={id}
                {...rest}
              />
            );
          })
        }
      </footer>
    </article>
  );
}