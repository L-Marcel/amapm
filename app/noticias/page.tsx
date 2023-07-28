import { Post, PostContent } from "@/components/Post";
import style from "./index.module.scss";
import { Query } from "@/services/query";

export default async function News() {
  const news = await Query.getNews();

  return (
    <main className={style.container}>
      <section>
        {
          news.map((post) => {
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