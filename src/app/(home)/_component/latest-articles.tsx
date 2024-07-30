import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Article = {
  catagory: string;
  title: string;
  description: string;
  imageSrc: string;
};

const articles: Article[] = [
  {
    catagory: "Marketing",
    title: "7 Essential Tools for Forward-Thinking Creative Agencies",
    description:
      "Creative agencies work on many projects simultaneously, making advanced project management tools necessary. However, many agencies are still…",
    imageSrc: "/placeholder.svg",
  },
  {
    catagory: "Marketing",
    title: "8 Trends Shaping the Future of Creative Agencies",
    description:
      "Creative agencies have an indisputable role as change agents amid evolving consumer behavior and client expectations. Agencies stretch…",
    imageSrc: "/placeholder.svg",
  },
  {
    catagory: "Marketing",
    title: "Ultimate Guide to Choosing Tools for Digital Marketing Agencies...",
    description:
      "In the throes of 2024’s digital marketing agency arena, the tremors from OpenAI’s latest conference have sent a…",
    imageSrc: "/placeholder.svg",
  },
  {
    catagory: "Marketing",
    title: "7 Essential Tools for Forward-Thinking Creative Agencies",
    description:
      "Creative agencies work on many projects simultaneously, making advanced project management tools necessary. However, many agencies are still…",
    imageSrc: "/placeholder.svg",
  },
  {
    catagory: "Marketing",
    title: "8 Trends Shaping the Future of Creative Agencies",
    description:
      "Creative agencies have an indisputable role as change agents amid evolving consumer behavior and client expectations. Agencies stretch…",
    imageSrc: "/placeholder.svg",
  },
  {
    catagory: "Marketing",
    title: "Ultimate Guide to Choosing Tools for Digital Marketing Agencies...",
    description:
      "In the throes of 2024’s digital marketing agency arena, the tremors from OpenAI’s latest conference have sent a…",
    imageSrc: "/placeholder.svg",
  },
];

export function LatestArticles() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <Header />

      <Body />
      <Button variant={"linkHover1"} className="mt-10 text-primary">
        See All Articles
      </Button>
    </div>
  );
}

function Header() {
  return <h1 className="text-center text-4xl font-bold">Latest Articles</h1>;
}

function Body() {
  return (
    <div className="mt-10 grid grid-cols-1 items-center justify-between gap-4 md:grid-cols-1 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="flex h-[462px] w-auto flex-col items-start rounded-lg border bg-black/5 shadow-md"
        >
          <Image
            src={""}
            width={460}
            height={212}
            alt={"Latest news"}
            className="w-full border-2 border-black rounded-t-lg"
          />
          <div className="flex flex-col items-start justify-between gap-4 p-4">
            <Badge>{article.catagory}</Badge>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {article.title}
            </h4>
            <p className="">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
