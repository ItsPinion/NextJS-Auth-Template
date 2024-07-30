import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export function TopAgencies() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 p-24">
      <h1 className="text-center text-4xl font-bold">Top Agencies</h1>
      <Body />
      <Button variant={"linkHover1"} className="w-fit text-primary">
        See All Agencies
      </Button>
    </div>
  );
}

type Agencies = {
  title: string;
  discription: string;
  redirectUrl: string;
  imageSrc: string;
};

const agencies: Agencies[] = [
  {
    title: "Marketing",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    redirectUrl: "/",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Influencer Marketing News and Resources",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    redirectUrl: "/",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Influencer Marketing Platforms",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    redirectUrl: "/",
    imageSrc: "/placeholder.svg",
  },
  {
    title: "Influencer Marketing Agencies",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    redirectUrl: "/",
    imageSrc: "/placeholder.svg",
  },
];

function Body() {
  return (
    <div className="flex flex-col items-center justify-between gap-7">
      {agencies.map((agencie, index) => (
        <div
          key={index}
          className="flex w-auto flex-row items-center justify-center gap-10 rounded-lg border p-5 shadow-md"
        >
          <Image
            src={agencie.imageSrc}
            width={220}
            height={160}
            alt={"Latest news"}
            className="h-[160px] w-[220px] rounded-sm border-2 border-black"
          />

          <div className="flex max-h-48 w-[70%] flex-col justify-center gap-y-5 text-start">
            <h4 className="h-fit text-sm font-semibold tracking-tight">
              {agencie.title}
            </h4>
            <p className="multi-line-truncate">{agencie.discription}</p>
          </div>
          <Button
            variant="expandIcon"
            Icon={FaArrowRightLong}
            iconPlacement="right"
            className="rounded-full"
          >
            View Details
          </Button>
        </div>
      ))}
    </div>
  );
}
