"use client";

import style from "./index.module.scss";
import { appContext } from "@/context/NewsProvider";
import { ChangeEvent, useContext } from "react";

let timer: NodeJS.Timeout | null = null;
export function SearchInput() {
  const { search } = useContext(appContext);

  function filterNews(e: ChangeEvent<HTMLInputElement>) {
    return () => {
      search(e.target.value);
    };
  }
  
  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    if(timer) {
      clearTimeout(timer);
      timer = setTimeout(filterNews(e), 1000);
    } else {
      timer = setTimeout(filterNews(e), 1000);
    }
  }

  return (
    <input 
      className={style.container}
      type="text" 
      onChange={onChangeInput}
      placeholder="Pequise por título, author(a) ou data"
    />
  );
}