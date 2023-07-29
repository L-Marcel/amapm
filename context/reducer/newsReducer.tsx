import { NewsContent } from "@/components/News";
import dayjs from "dayjs";

export type NewsReducerState = {
  data: NewsContent[];
  initialData: NewsContent[];
  page: {
    min: number;
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
  static reducer(state: NewsReducerState, action: Actions): NewsReducerState {
    let data: NewsContent[] = [...state.initialData];
    let page = state.page;

    switch(action.type) {
      case NewsReducerActions.SEARCH:
        const query = action.query;

        data = data.filter((news) => {
          const formattedPublishedAt = dayjs(news.publishedAt).format("DD/MM/YYYY");
          
          if(news.title.includes(query) || news.author.includes(query) || formattedPublishedAt.includes(query)) {
            return true;
          };

          return false;
        });

        console.log(data.map(d => d.title));

        return {
          ...state,
          data
        };
      case NewsReducerActions.NAVIGATE:
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