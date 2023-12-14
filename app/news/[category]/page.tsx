import NewsList from "@/app/NewsList";
import { Categories } from "@/constant";
import fetchNews from "@/lib/fetchNews";

type Props = {
    params: { category: Category };
}
const NewsCategory = async ({ params: { category } }: Props) => {
    const news: NewsResponse = await fetchNews(category);
    return (
        <div>
            <h1 className="headerTitle">{category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategory

export async function generateStaticParams() {
    return Categories.map(category => ({
        category: category
    }))
}

// localhost:3000/news/sport
// localhost:3000/news/business
// etc