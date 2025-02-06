"use client";

import parse from "html-react-parser";
import getNews from "@/lib/getNews";

type Params = {
  params: {
    newsId: string;
  };
};

export default function NewsPage({ params: { newsId } }: Params) {
  const pageHtml = getNews(newsId);

  if (!pageHtml?.newsPage) {
    return <p>ops...</p>;
  }

  return <>{parse(pageHtml.newsPage)}</>;
}
