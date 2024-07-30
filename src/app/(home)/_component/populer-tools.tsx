import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PopulerTools() {
  return (
    <div className="flex flex-col gap-y-10 bg-[#EFEBEB] p-4 lg:p-24">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-center text-4xl font-bold">Populer Tools</h1>

      <Button variant={"linkHover1"} className="text-primary">
        See All Tools
      </Button>
    </div>
  );
}

type Tool = {
  title: string;
  imageSrc: string;
};

const tools: Tool[] = [
  {
    title: "Marketing",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Influencer Marketing News and Resources",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Influencer Marketing Platforms",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Influencer Marketing Agencies",
    imageSrc: "/placeholder.svg",
  },
];

function Body() {
  return (
    <div className="grid grid-cols-1 items-center justify-between gap-10 md:grid-cols-1 lg:grid-cols-2">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex w-auto flex-row items-center justify-center rounded-lg border bg-white shadow-md"
        >
          <Image
            src={tool.imageSrc}
            width={400}
            height={400}
            alt={"Latest news"}
            className="h-[25%] w-[25%] rounded-l-lg border-2 border-black"
          />

          <h4 className="text-md h-fit w-[75%] scroll-m-20 px-5 text-start font-semibold tracking-tight">
            {tool.title}
          </h4>
        </div>
      ))}
    </div>
  );
}
