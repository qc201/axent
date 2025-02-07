import React from "react";
import { newsData } from "./newsData";

export default function getNews(newsId: string) {
  return newsData.find((d) => d.pagelink === newsId);
}
