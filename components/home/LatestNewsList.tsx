"use client";

import React from "react";
import { sortArticlesByDate } from "@/utils/SortArticle";
import { articlePlaceholder } from "@/placeholders/article";
import ArticleItemCard from "@/components/news/article/ArticleItemCard";

const LatestNewsList:React.FC = () => {

  const [itemsToShow, setItemsToShow] = React.useState<number>(6);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setItemsToShow(8);
      } else {
        setItemsToShow(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedArticles = sortArticlesByDate(articlePlaceholder)

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-1 gap-6"}>
      {sortedArticles.slice(0, itemsToShow).map((article, index) => (
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
