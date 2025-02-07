"use client";
import React from "react";
import BlogCard from "@/components/BlogCard";
import { blogData } from "@/lib/blogData";
import MaskText from "@/components/MaskText";
import ActiveBlogCard from "@/components/ActivBlogCard";
import { newsData } from "@/lib/newsData";

export default function News() {
  return (
    <div className="pt-16 bg-white sm:px-20 flex flex-col gap-2">
      <div className="flex flex-col items-center justify-center">
        <MaskText
          phrases={["Newsroom"]}
          className="pt-10 pb-5 sm:text-6xl text-3xl text-primary font-extrabold items-center justify-center"
        />
      </div>
      {newsData.map((data, index) => (
        <ActiveBlogCard
          key={index}
          imgsrc={data.imgsrc}
          releaseDate={data.releaseDate}
          title={data.title}
          location={data.location}
          content={data.content[0]}
          pagelink={`\\company\\news\\${data.pagelink}`}
        />
      ))}
      {blogData.map((data, index) => (
        <BlogCard
          key={index}
          imgsrc={`\\blog_img\\${data.pagelink}.jpg`}
          releaseDate={data.releaseDate}
          title={data.title}
          location={data.location}
          content={data.content[0]}
          pagelink={`\\company\\news\\${data.pagelink}`}
        />
      ))}
    </div>
  );
}
