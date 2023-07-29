'use client';

import { appContext } from "@/context/NewsProvider";
import { useContext } from "react";
import { News } from "./News";

export function NewsList() {
  const { news } = useContext(appContext);

  return (
    <>
      {
        news.map((post) => {
          return (
            <News
              key={post.id}
              content={post}
            />
          );
        })
      }
    </>
  );
};