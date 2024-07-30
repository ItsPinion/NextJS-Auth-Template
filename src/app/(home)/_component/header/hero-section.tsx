import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

interface HeroSectionProps {
  heroSectionRef: { image: string; title: string; subtitle: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroSectionRef,
  currentIndex,
  setCurrentIndex,
  nextImage,
  prevImage,
}) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src={heroSectionRef[currentIndex]?.image ?? "/placeholder.svg"}
          width={1800}
          height={1800}
          alt="Carousel Image"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevImage}
          className="rounded-full bg-white p-2 shadow-md"
        >
          <FaChevronLeft className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={nextImage}
          className="rounded-full bg-white p-2 shadow-md"
        >
          <FaChevronRight className="h-6 w-6 text-black" />
        </button>
      </div>
      <div className="absolute bottom-0 right-0 flex justify-center gap-4 space-x-2 p-10">
        {heroSectionRef.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            width={70}
            height={70}
            alt={`Thumbnail ${index + 1}`}
            className={cn(
              "h-16 w-16 cursor-pointer rounded-md object-cover trabsform-all duration-500",
              currentIndex === index ? "scale-150 border-2 border-pink-600" : ""
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="absolute bottom-[35%] left-[10%] w-[45%] space-y-10 text-white">
        <h1 className="scroll-m-20 gap-y-3 text-6xl font-extrabold capitalize tracking-tight lg:text-5xl">
          {heroSectionRef[currentIndex]?.title}
        </h1>
        <blockquote>{heroSectionRef[currentIndex]?.subtitle}</blockquote>
        <div className="flex flex-row gap-x-10">
          <Button
            variant="expandIcon"
            Icon={FaArrowRightLong}
            iconPlacement="right"
            className="rounded-full p-7 text-xl"
          >
            About Us
          </Button>
          <Button
            variant="expandIcon"
            Icon={FaArrowRightLong}
            iconPlacement="right"
            className="rounded-full p-7 text-xl bg-transparent border-2 border-white hover:bg-transparent"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export {HeroSection};
