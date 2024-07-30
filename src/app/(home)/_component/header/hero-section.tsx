import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

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
      {/* Image and Overlay */}
      <div className="relative h-full w-full">
        <Image
          src={heroSectionRef[currentIndex]?.image ?? "/placeholder.svg"}
          width={1800}
          height={1800}
          alt="Carousel Image"
          className="h-[70%] lg:h-full w-full  object-cover"
        />
        <div className="absolute left-0 top-0 h-[70%] lg:h-full w-full bg-black opacity-50"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prevImage} className="bg-transparent m-0 p-0 z-10">
          <FaChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button onClick={nextImage} className="bg-transparent m-0 p-0 z-10">
          <FaChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-[30%] lg:botton-0 right-0 flex justify-center gap-4 space-x-2 p-10 flex-row md:items-end">
        {heroSectionRef.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            width={70}
            height={70}
            alt={`Thumbnail ${index + 1}`}
            className={cn(
              "h-16 w-16 cursor-pointer rounded-md object-cover transform-all duration-500",
              currentIndex === index ? "scale-150 border-2 border-pink-600" : ""
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="absolute bottom-[50%] p-10 lg:p-0 lg:w-[45%] space-y-10 text-white  lg:bottom-[35%] lg:left-[10%]">
        <h1 className="text-4xl font-extrabold capitalize tracking-tight md:text-3xl lg:text-6xl">
          {heroSectionRef[currentIndex]?.title}
        </h1>
        <blockquote className="text-sm md:text-base">{heroSectionRef[currentIndex]?.subtitle}</blockquote>
        <div className="flex mx-auto lg:m-0 items-center lg:gap-x-10 flex-row gap-5">
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
