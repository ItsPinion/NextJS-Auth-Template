import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PopulerTools() {
  return (
    <div className="p-24 bg-[#EFEBEB] flex flex-col gap-y-10">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row items-center justify-between ">
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
    <div className="grid grid-cols-1 items-center justify-between md:grid-cols-1 lg:grid-cols-2 gap-10">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex  w-auto flex-row items-center justify-center rounded-lg border shadow-md bg-white"
        >
          <Image
            src={tool.imageSrc}
            width={400}
            height={400}
            alt={"Latest news"}
            className="w-[25%] h-[25%] border-2 border-black rounded-l-lg"
          />


          <h4 className="scroll-m-20 text-md w-[75%] text-center h-fit font-semibold tracking-tight px-5">
            {tool.title}
          </h4>
        </div>
      ))}
    </div>
  );
}
