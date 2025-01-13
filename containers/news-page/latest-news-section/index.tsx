"use client";

import LatestNewsGrid from "@/components/news/LatestNewsGrid";

const LatestNewsSection = () => {
  return (
    <section>
      <div className="flex flex-col p-6 md:p-16">
        <div className={"flex flex-col basis-1/5 p-6 items-center justify-center"}>
          <h1 className={"text-4xl text-content2-foreground font-bold uppercase"}>Latest News</h1>
          <p className={"text-2xl text-content2-foreground font-normal"}>Discover our latest news</p>
        </div>
        <div className={"flex p-2"}>
          <LatestNewsGrid />
        </div>
      </div>
    </section>
  )
}

export default LatestNewsSection;