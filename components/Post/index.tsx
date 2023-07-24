import style from "./index.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type PostContent = {
  body: string;
};

interface PostProps {
  content: PostContent;
};

export function Post({ content }: PostProps) {
  return (
    <article className={style.container}>
      <header>
        <h3>
          Ata da reunião do mês de maio
        </h3>
        <p>30/05/2023 — Por Ana Paula</p>
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
          {content.body}
        </Markdown>
      </main>
      <footer>
        <a href="#" role="blue">Exemplo de butão azul</a>
        <a href="#">Abrir publicação completa</a>
      </footer>
    </article>
  );
};