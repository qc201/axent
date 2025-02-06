import React from "react";
import { blogData } from "./blogData";

export default function getNews(newsId: string) {
  return blogData.find((d) => d.pagelink === newsId);
}
