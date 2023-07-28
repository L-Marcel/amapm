import { PanelData } from "@/components/Panel";
import { PostContent } from "@/components/Post";

async function request(query: string) {
	const response = await fetch(process.env.ENDPOINT as string, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
		},
		body: JSON.stringify({ query }),
    next: { 
      revalidate: 0,
      tags: ["hygraph"] 
    } 
	});

  const json = await response.json();

	return json.data;
};

export class Query {
  static async getPanels() {
    console.log("Requestiing panels...");
    const response = await request(`query getPanels {
      paineisDeContribuicao {
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
          body {
            markdown
          }
        }
        createdAt
        description {
          markdown
        }
        title
      }
    }`);

    return (response.paineisDeContribuicao ?? []) as PanelData[];
  };

  static async getMemberPanel() {
    console.log("Requestiing member panel...");
    const response = await request(`query getMemberPanel {
      sejaMembros {
        title
        share_button {
          id
          link
          text
          theme
          title
          type
          body {
            markdown
          }
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

    console.log(response.sejaMembros[0]);
    return (response.sejaMembros[0] ?? undefined) as PanelData | undefined;
  };

  static async getNews() {
    console.log("Requestiing news...");
    const response = await request(`query getNews {
      noticias {
        id
        author
        title
        body {
          markdown
        }
        publishedAt
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

    return (response.noticias ?? []) as PostContent[];
  };
};