import { NewsContent } from "@/components/News";
import dayjs from "dayjs";

export type NewsReducerState = {
  data: NewsContent[];
  initialData: NewsContent[];
  query: string;
  page: {
    current: number;
    max: number;
  };
};

export enum NewsReducerActions {
  SEARCH,
  NAVIGATE
};

type SearchAction = {
  type: NewsReducerActions.SEARCH;
  query: string;
};

type NavigateAction = {
  type: NewsReducerActions.NAVIGATE;
  page: number;
};

type Actions = SearchAction | NavigateAction;

export class NewsReducer {
  private static filterByQuery(data: NewsContent[], query: string) {
    return data.filter((news) => {
      const formattedPublishedAt = dayjs(news.publishedAt).format("DD/MM/YYYY");
      
      if(
        news.title.toLowerCase().includes(query.toLowerCase()) || 
        news.author.toLowerCase().includes(query.toLowerCase()) || 
        formattedPublishedAt.toLowerCase().includes(query.toLowerCase())
      ) {
        return true;
      };

      return false;
    });
  };

  private static getNewsInPage(data: NewsContent[], page: number, maxPage: number) {
    if(page < 1 || page > maxPage) {
      page = Math.min(page, maxPage);
      page = Math.max(page, 1);
    };

    const start = (page - 1) * 10;
    const end = start + 10;

    return {
      data: data.slice(start, end),
      page
    };
  };

  static reducer(state: NewsReducerState, action: Actions): NewsReducerState {
    let data: NewsContent[] = [...state.initialData];

    switch(action.type) {
      case NewsReducerActions.SEARCH:
        data = NewsReducer.filterByQuery(data, action.query);

        const newMaxPageOnSearch = Math.ceil(data.length / 10);
        data = NewsReducer.getNewsInPage(data, 1, newMaxPageOnSearch).data;

        return {
          ...state,
          page: {
            current: 1,
            max: newMaxPageOnSearch
          },
          query: action.query,
          data
        };
      case NewsReducerActions.NAVIGATE:
        data = NewsReducer.filterByQuery(data, state.query);
        
        const newMaxPageOnNavigate = Math.ceil(data.length / 10);
        const pageIntervalData = NewsReducer.getNewsInPage(data, action.page, newMaxPageOnNavigate);
        data = pageIntervalData.data;

        return {
          ...state,
          page: {
            current: pageIntervalData.page,
            max: state.page.max
          },
          data
        };
      default:
        break;
    };

    return {
      ...state
    };
  };

  static search(query: string): SearchAction {
    return {
      type: NewsReducerActions.SEARCH,
      query
    };
  };

  static navigate(page: number): NavigateAction {
    return {
      type: NewsReducerActions.NAVIGATE,
      page
    };
  };
};