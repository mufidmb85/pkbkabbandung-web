import { Image } from "@nextui-org/image";

export default async function Page() {
  return (
    <article className={"flex flex-col items-center justify-center"}>
      <div className={"max-w-3xl flex flex-col bg-content2 w-full p-6"}>
        <div className={"flex flex-col items-center justify-center py-6"}>
          <Image src={"https://placehold.co/1280x720?text=Image+Banner"}
                 style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div className={"flex flex-col items-start justify-start py-6"}>
          <h1 className={"text-4xl font-bold"}>Title</h1>
          <h2 className={"text-2xl font-normal"}>Subtitle</h2>
          <p className={"text-xs"}>By: <strong>Author</strong></p>
          <p className={"text-xs"}>Uploaded: 25 Januari 2025</p>
        </div>
        <div className={"flex flex-col items-start justify-start py-6"}>
          <p className={"text-medium"}>Content Here</p>
        </div>
      </div>
    </article>
  )
}