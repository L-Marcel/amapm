import style from "./index.module.scss";
import { Query } from "@/services/query";
import { NewsProvider } from "@/context/NewsProvider";
import { NewsList } from "@/components/NewsList";
import { SearchInput } from "@/components/SearchInput";

export default async function News() {
  const news = await Query.getNews();

  return (
    <main className={style.container}>
      <NewsProvider news={news}>
        <section>
          <SearchInput/>
        </section>
        <section>
          <NewsList/>
        </section>
      </NewsProvider>
    </main>
  );
};