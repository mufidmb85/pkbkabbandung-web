"use client";

import React from "react";
import { sortArticlesByDate } from "@/utils/SortArticle";
import { articlePlaceholder } from "@/placeholders/article";
import ArticleItemCard from "@/components/news/article/ArticleItemCard";

const LatestNewsList:React.FC = () => {

  const sortedArticles = sortArticlesByDate(articlePlaceholder)

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-6"}>
      {sortedArticles.slice(0, 3).map((article, index) => (
        <ArticleItemCard
          key={article.id}
          id={article.id}
          title={article.title}
          author={article.author}
          authorId={article.authorId}
          date={article.date}
          imageUrl={article.imageUrl}
          content={article.content}
          tags={article.tags}
          category={article.category}
          excerpt={article.excerpt}
          slug={article.slug}
        />
      ))}
    </div>
  )
}

export default LatestNewsList;
