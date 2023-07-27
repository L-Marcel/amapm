import { Post, PostContent } from "@/components/Post";
import style from "./index.module.scss";
import { Query } from "@/services/query";

export default async function News() {
  const news = await Query.getNews();

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