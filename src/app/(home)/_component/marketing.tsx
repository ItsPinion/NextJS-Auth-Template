import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

type Section = {
  title: string;
  description: string;
  imageSrc: string;
  section: string;
};

const demoData: Section[] = [
  {
    title: "Influencer Marketing Agencies",
    description:
      "View a collection of the globe's leading marketing agencies all in one place",
    imageSrc: "/placeholder.svg",
    section: "Agencies",
  },
  {
    title: "Influencer Marketing Platforms",
    description:
      "All the leading influencer marketing platforms rated and reviewed",
    imageSrc: "/placeholder.svg",
    section: "Platforms",
  },
];
export function MarketingSection() {
  return (
    <div className="bg-[#EFEBEB] p-24">
      {demoData.map((section, index) => (
        <div
          key={index}
          className="mb-12 flex flex-row items-center justify-between bg-white rounded-lg"
        >
          {index % 2 ? (
            <>
              <div className="flex w-[50%] flex-col items-start justify-center gap-5">
                <h2 className="text-start text-4xl font-bold">
                  {section.title}
                </h2>
                <blockquote className="text-start">
                  {section.description}
                </blockquote>
                <Button
                  variant="expandIcon"
                  Icon={FaArrowRightLong}
                  iconPlacement="right"
                  className="rounded-full"
                >
                  View {section.section}
                </Button>
              </div>
              <Image
                src={section.imageSrc}
                width={553}
                height={462}
                alt={section.section}
                className="w-[35%] rounded-md border-2 border-black"
              />
            </>
          ) : (
            <>
              <Image
                src={section.imageSrc}
                width={553}
                height={462}
                alt={section.section}
                className="w-[35%] rounded-md border-2 border-black"
              />
              <div className="flex w-[50%] flex-col items-start justify-center gap-5">
                <h2 className="text-start text-4xl font-bold">
                  {section.title}
                </h2>
                <blockquote className="text-start">
                  {section.description}
                </blockquote>
                <Button
                  variant="expandIcon"
                  Icon={FaArrowRightLong}
                  iconPlacement="right"
                  className="rounded-full"
                >
                  View {section.section}
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
