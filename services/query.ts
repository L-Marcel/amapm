import { PanelData } from "@/components/Panel";
import { NewsContent } from "@/components/News";

const isDev = process.env.NODE_ENV === "development";

async function request(tag: string, query: string) {
  if(isDev) {
    console.info("- 🤖 caching is enabled in development mode to preserve the API request limiter!");
  }

  const response = await fetch(process.env.ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    cache: isDev? "default":"no-store",
    next: {
      tags: [tag] 
    } 
  });

  const json = await response.json();

  return json.data;
}

export class Query {
  static async getPanels() {
    const response = await request("PainelDeContribuicao", `query getPanels {
      paineisDeContribuicao(orderBy: createdAt_DESC, first: 11) {
        id
        panel_button {
          id
          link
          text
          theme
          type
        }
        share_button {
          id
          link
          text
          theme
          title
          type
          body
        }
        createdAt
        description {
          markdown
        }
        title
      }
    }`);

    return (response.paineisDeContribuicao ?? []) as PanelData[];
  }

  static async getMemberPanel() {
    const response = await request("SejaMembro", `query getMemberPanel {
      sejaMembros {
        title
        share_button {
          id
          link
          text
          theme
          title
          type
          body
        }
        panel_button {
          theme
          text
          link
          id
          type
        }
        description {
          markdown
        }
        createdAt
        id
      }
    }`);

    return (response.sejaMembros[0] ?? undefined) as PanelData | undefined;
  }

  static async getNews() {
    const response = await request("Noticia", `query getNews {
      noticias(orderBy: createdAt_DESC, first: 30) {
        id
        author
        title
        body {
          markdown
        }
        createdAt
        buttons {
          ... on Button {
            id
            link
            text
            theme
            type
          }
          ... on ShareButton {
            id
            link
            text
            theme
            title
            type
          }
        }
      }           
    }`);

    return (response.noticias ?? []) as NewsContent[];
  }
}