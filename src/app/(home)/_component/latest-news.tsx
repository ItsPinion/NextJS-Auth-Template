import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

type Article = {
  title: string;
  description: string;
  imageSrc: string;
};

const demoData: Article[] = [
  {
    title: "7 Essential Tools for Forward-Thinking Creative Agencies",
    description:
      "Creative agencies work on many projects simultaneously, making advanced project management tools necessary. However, many agencies are still…",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "8 Trends Shaping the Future of Creative Agencies",
    description:
      "Creative agencies have an indisputable role as change agents amid evolving consumer behavior and client expectations. Agencies stretch…",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Ultimate Guide to Choosing Tools for Digital Marketing Agencies...",
    description:
      "In the throes of 2024’s digital marketing agency arena, the tremors from OpenAI’s latest conference have sent a…",
    imageSrc: "/placeholder.svg",
  },
];

export function LatestNews() {
  const mainArticle = demoData[0];
  const sideArticles = demoData.slice(1);

  return (
    <div className="p-24">
      <h1 className="mb-10 text-center text-4xl font-bold">Latest News</h1>
      <Body mainArticle={mainArticle} sideArticles={sideArticles} />
    </div>
  );
}

function Body({
  mainArticle,
  sideArticles,
}: {
  mainArticle: Article | undefined;
  sideArticles: Article[];
}) {
  return (
    <div className="flex flex-row items-start justify-center gap-12">
      {mainArticle && (
        <div className="flex min-w-[65%] flex-col items-start justify-center gap-5">
          <Image
            src={mainArticle.imageSrc}
            width={671}
            height={388}
            alt={"Latest news"}
            className="mx-auto w-full rounded-md border-2 border-black"
          />
          <h2 className="text-start text-4xl font-bold">{mainArticle.title}</h2>
          <blockquote className="text-start">
            {mainArticle.description}
          </blockquote>
          <Button
            variant="expandIcon"
            Icon={FaArrowRightLong}
            iconPlacement="right"
            className="rounded-full p-7 text-xl"
          >
            Read More
          </Button>
        </div>
      )}

      <div className="flex min-w-[35%] flex-col items-start justify-center gap-5">
        {sideArticles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-3"
          >
            <Image
              src={article.imageSrc}
              width={460}
              height={212}
              alt={"Latest news"}
              className="mx-auto w-full rounded-md border-2 border-black"
            />
            <h2 className="text-start text-2xl font-bold">{article.title}</h2>
            <blockquote className="text-start">
              {article.description}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
