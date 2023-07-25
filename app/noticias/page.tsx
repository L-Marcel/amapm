import { Post, PostContent } from "@/components/Post";
import style from "./index.module.scss";
import { Query } from "@/services/query";

export default async function News() {
  const response = await Query.getNews() as any;
  const news = (response.noticias ?? []) as PostContent[];

  return (
    <main className={style.container}>
      <section>
        {
          news
          .sort((a, b) => {
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
          })
          .map((post) => {
            return (
              <Post
                key={post.id}
                content={post}
              />
            );
          })
        }
      </section>
    </main>
  );
};