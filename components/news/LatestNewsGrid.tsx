"use client";

import React from "react";
import { sortArticlesByDate } from "@/utils/SortArticle";
import { articlePlaceholder } from "@/placeholders/article";
import ArticleItemCard from "@/components/news/article/ArticleItemCard";
import LatestNewsPagination from "@/components/news/LatestNewsPagination";

const LatestNewsGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsToShow, setItemsToShow] = React.useState<number>(9);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1536) {
        setItemsToShow(12);
      } else if (window.innerWidth > 768) {
        setItemsToShow(9);
      } else {
        setItemsToShow(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  const sortedArticles = sortArticlesByDate(articlePlaceholder);

  // Update totalPages whenever itemsToShow or sortedArticles changes
  const totalPages = Math.ceil(sortedArticles.length / itemsToShow);

  // Ensure that currentPage doesn't exceed totalPages when the number of items per page changes
  if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }

  const currentPages = sortedArticles.slice(
    (currentPage - 1) * itemsToShow,
    currentPage * itemsToShow
  );

  const handlePageChange = (page: number) => {
    // Set the page if it's within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={"flex flex-col gap-y-6"}>
      <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"}>
        {currentPages.map((article) => (
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
      <div className={"flex justify-center items-center"}>
        <LatestNewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          showControl={true}
        />
      </div>
    </div>
  );
};

export default LatestNewsGrid;
