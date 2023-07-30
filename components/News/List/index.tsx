'use client';

import { appContext } from "@/context/NewsProvider";
import { useContext } from "react";
import { News } from "..";
import style from "./index.module.scss";

export function NewsList() {
  const { news } = useContext(appContext);

  return (
    <>
      {
        news.length >= 1? news.map((post) => {
          return (
            <News
              key={post.id}
              content={post}
            />
          );
        }):<div className={style.not_found}>
          <h3>Nenhuma notícia encontrada</h3>
          <p>Desclpe, talvez a notícia que você esteja procurando não exista mais aqui</p>
        </div>
      }
    </>
  );
};