"use client";

import React from "react";
import { ArticleProps } from "@/interface/ArticleProps";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { formatDate } from "@/utils/Date";
import { useRouter } from "next/navigation";

const ArticleItemCard:React.FC<ArticleProps> = (props: ArticleProps) => {
  const articleUrl = "/news/article/" + props.slug;
  const router = useRouter();
  const date = props.date;
  const formattedDate = formatDate(date);

  return (
    <Card isPressable={true} key={props.id} onPress={() => router.push(articleUrl)}>
      <CardHeader className={"p-0 m-0 aspect-[4/3]"}>
        <Image className={"w-full h-full aspect-[4/3]"} src={props.imageUrl} alt={props.title} radius={"none"} style={{objectFit: "cover", objectPosition: "center"}} />
      </CardHeader>
      <CardBody>
        <h1 className={"text-primary text-2xl font-medium"}>{props.title}</h1>
        <h2 className={"text-content1-foreground text-xl font-normal"}>{props.excerpt}</h2>
      </CardBody>
      <CardFooter>
        <div className={"flex flex-col justify-center items-start"}>
          <p className={"text-content1-foreground text-xl font-normal"}>By <strong>{props.author}</strong></p>
          <p className={"text-content1-foreground text-xl font-light"}>{formattedDate}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ArticleItemCard;