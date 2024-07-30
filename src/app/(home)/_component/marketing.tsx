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
    <div className="flex flex-col gap-5 bg-[#EFEBEB] px-4 py-10 lg:p-24">
      {demoData.map((section, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between rounded-lg lg:flex-row"
        >
          {index % 2 ? (
            <>
              <Image
                src={section.imageSrc}
                width={553}
                height={462}
                alt={section.section}
                className="block rounded-md border-2 border-black lg:hidden lg:w-[35%]"
              />
              <div className="flex flex-col items-start justify-center gap-5 lg:w-[50%]">
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
                  className="mx-auto my-5 flex scale-150 rounded-full lg:m-0 lg:scale-100 "
                >
                  View {section.section}
                </Button>
              </div>
              <Image
                src={section.imageSrc}
                width={553}
                height={462}
                alt={section.section}
                className="hidden w-[35%] rounded-md border-2 border-black lg:block"
              />
            </>
          ) : (
            <>
              <Image
                src={section.imageSrc}
                width={553}
                height={462}
                alt={section.section}
                className="rounded-md border-2 border-black lg:w-[35%]"
              />
              <div className="flex flex-col items-start justify-center gap-5 lg:w-[50%]">
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
                  className="mx-auto my-5 flex scale-150 rounded-full lg:m-0 lg:scale-100 "
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
