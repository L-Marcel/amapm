async function request(query: string) {
	const response = await fetch(process.env.ENDPOINT as string, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
		},
		body: JSON.stringify({ query }),
	});

	const { data } = await response.json();

	return data;
};

export class Query {
  static async getNews() {
    return await request(`query getNews {
        noticias {
          id
          author
          title
          body
          publishedAt
          buttons {
            ... on Button {
              id
              link
              text
              theme
            }
          }
        }                
      }`);
  };
};