export type Post = {
  title: string;
  headline: string;
  slug: string;
  date: string;
  content: string;
};

export async function getPosts(): Promise<Post[]> {
  const hygraphEndpoint = process.env.HYGRAPH_ENDPOINT as string;
  const response = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
        posts {
          title
          headline
          slug
          date
          content
        }
      }`,
    }),
  });
  const json = await response.json();
  return <Post[]>json.data.posts;
}
