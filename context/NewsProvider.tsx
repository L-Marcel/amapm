'use client';

import { NewsContent } from "@/components/News";
import { ReactNode, createContext, useCallback, useReducer } from "react";
import { NewsReducer } from "./reducer/newsReducer";

export type AppContext = {
  news: NewsContent[];
  search: (query: string) => void;
};

export const appContext = createContext({} as AppContext);

interface NewsProviderProps {
  children: ReactNode;
  news: NewsContent[];
}

export function NewsProvider({ children, news }: NewsProviderProps) {
  const [{ data, page }, dispatch] = useReducer(NewsReducer.reducer, {
    data: news,
    initialData: news,
    page: {
      current: 1,
      min: 1,
      max: 1
    }
  });

  const search = useCallback((query: string) => {
    dispatch(NewsReducer.search(query));
  }, [dispatch]);

  return (
    <appContext.Provider value={{ news: data, search }}>
      {children}
    </appContext.Provider>
  );
};