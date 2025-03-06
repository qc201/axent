import parse from "html-react-parser";
import getNews from "@/lib/getNews";


type Params = {
  params: {
    newsId: string;
  };
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) {
  const { newsId } = await params;
  const pageHtml = getNews(newsId);

  if (!pageHtml?.newsPage) {
    return <p>Loading...</p>;
  }

  return <div className="md:px-40">{parse(pageHtml.newsPage)}</div>;
}
