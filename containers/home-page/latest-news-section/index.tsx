"use client";

import LatestNewsGrid from "@/components/home/LatestNewsGrid";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const LatestNewsSection = () => {

  const router = useRouter();

  return (
    <section>
      <div className={"flex flex-col p-6 bg-content2"}>
        <div className={"flex flex-col basis-1/5 p-4 items-center justify-center"}>
          <h1 className={"text-4xl text-content2-foreground font-bold uppercase"}>Latest News</h1>
          <p className={"text-2xl text-content2-foreground font-normal"}>Discover our latest news</p>
        </div>
        <div className={"flex flex-row basis-4/5 p-6"}>
          <LatestNewsGrid />
        </div>
        <div className={"flex flex-row w-full justify-center items-center sm:justify-end p-6"}>
          <Button variant={"light"} color={"primary"} onPress={() => router.push("/news")}>See more</Button>
        </div>
      </div>
    </section>
  )
}

export default LatestNewsSection;