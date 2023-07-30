import style from "./index.module.scss";
import { Query } from "@/services/query";
import { NewsProvider } from "@/context/NewsProvider";

import { SearchInput } from "@/components/News/SearchInput";
import { NewsList } from "@/components/News/List";
import { NewsPagination } from "@/components/News/Pagination";

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
          <NewsPagination/>
        </section>
      </NewsProvider>
    </main>
  );
}