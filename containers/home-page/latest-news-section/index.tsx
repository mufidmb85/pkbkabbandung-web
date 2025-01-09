import LatestNewsList from "@/components/home/LatestNewsList";
import { Button } from "@nextui-org/button";

const LatestNewsSection = () => {
  return (
    <section>
      <div className={"flex flex-col p-6 bg-content2 w-full"}>
        <div className={"flex flex-col basis-1/5 p-4 items-center justify-center"}>
          <h1 className={"text-4xl text-content2-foreground font-bold uppercase"}>Latest News</h1>
          <p className={"text-2xl text-content2-foreground font-normal"}>Discover our latest news</p>
        </div>
        <div className={"flex flex-row basis-4/5 p-4"}>
          <LatestNewsList />
        </div>
        <div className={"flex flex-row w-full justify-center items-center sm:justify-end p-4"}>
          <Button variant={"light"} color={"primary"}>See more</Button>
        </div>
      </div>
    </section>
  )
}

export default LatestNewsSection;