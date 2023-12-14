import { Categories } from "@/constant"
import fetchNews from "@/lib/fetchNews"
import NewsList from "./NewsList"
import response from '../response.json'
import { resolve } from "path";

export default async function Home() {
  const news: NewsResponse =  await fetchNews(Categories.join(','));
  // set timeout fro 3 seconds
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
   <div className="">
    <NewsList news={news} />
   </div>
  )
}
   