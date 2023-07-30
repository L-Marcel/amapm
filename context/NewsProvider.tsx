'use client';

import { NewsContent } from "@/components/News";
import { ReactNode, createContext, useCallback, useReducer } from "react";
import { NewsReducer } from "./reducer/newsReducer";

export type AppContext = {
  news: NewsContent[];
  search: (query: string) => void;
  navigate: (page: number) => void;
  page: {
    current: number;
    max: number;
  };
};

export const appContext = createContext({} as AppContext);

interface NewsProviderProps {
  children: ReactNode;
  news: NewsContent[];
}

export function NewsProvider({ children, news }: NewsProviderProps) {
  const initialMaxPage = Math.ceil(news.length / 10);

  const [{ data, page }, dispatch] = useReducer(NewsReducer.reducer, {
    data: news.slice(0, 10),
    initialData: news,
    page: {
      current: 1,
      max: initialMaxPage
    },
    query: ""
  });

  const search = useCallback((query: string) => {
    dispatch(NewsReducer.search(query));
  }, [dispatch]);

  const navigate = useCallback((page: number) => {
    dispatch(NewsReducer.navigate(page));
  }, [dispatch]);

  return (
    <appContext.Provider 
      value={{ 
        news: data, 
        search,
        navigate,
        page
      }}
    >
      {children}
    </appContext.Provider>
  );
};