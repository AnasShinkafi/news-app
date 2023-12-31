import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL Query
  const query = gql`
    query MyQuery (
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"      
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with Next.js caching
  const res = await fetch('https://torrejondelacalzada.stepzen.net/api/zealous-mongoose/__graphql',
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log(
    "Loading new data from API for category ....",
    category,
    keywords
  );

  const newsResponse = await res.json();  

  // Sort function by images vs not image present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
};

export default fetchNews;


//stepzen import curl "http://api.mediastack.com/v1/news?access_key=b05bfc628125968256cfba8710cd5026&countries=us%2Cgb&limit=20&offset=0&sort=published_desc"


 