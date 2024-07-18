"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { HomeNav } from "./header-nav";

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const heroSectionRef = [
    {
      image: "https://i.ibb.co/R4n1Zfg/image-4.png",
      title: "Marketing News and Resources",
      subtitle:
        "Influencer Marketing Hub offers you all the latest Marketing news, tools and resources to enable influencers, agencies and platforms to connect and harness the power of Marketing.",
    },
    {
      image: "https://i.ibb.co/WzsBq8V/image1.jpg",
      title: "Influencer Marketing News and Resources",
      subtitle:
        "Influencer Marketing Hub offers you all the latest Influencer Marketing news, tools and resources to enable influencers, agencies and platforms to connect and harness the power of Marketing under the Influence",
    },
    {
      image: "https://i.ibb.co/NnPD6Q7/image-2.png",
      title: "Influencer Marketing Platforms",
      subtitle:
        "Discover the Ultimate Influencer Marketing Platforms to Supercharge Your Influencer Marketing Strategy.",
    },
    {
      image: "https://i.ibb.co/cNjmDsf/image-3.jpg",
      title: "Influencer Marketing Agencies",
      subtitle:
        "Find the Leading Influencer Marketing Agency to Manage your Influencer Campaigns across the board.",
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSectionRef.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroSectionRef.length) % heroSectionRef.length
    );
  };

  return (
    <div className="relative h-screen w-full">
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
        <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-[#0000000f] to-black p-4 text-white">
          <div className="flex items-center space-x-4">
            <Logo className="scale-90" textColor="white" />
            <HomeNav />
          </div>
          <div className="flex items-center space-x-4">
            <Button className="rounded-md bg-pink-600 px-4 py-2 text-white">
              Benchmark Report 2024
            </Button>
            {showSearch && (
              <Input
                type="search"
                placeholder="Search..."
                className="rounded-md border p-2"
              />
            )}
            <Button
              onClick={() => setShowSearch(!showSearch)}
              variant="ghost"
              size="icon"
              className="h-10 w-10 bg-primary"
            >
              <SearchIcon className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </header>
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
                "h-16 w-16 cursor-pointer rounded-md object-cover",
                currentIndex === index
                  ? "scale-150 border-2 border-pink-600"
                  : ""
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[35%] left-[10%] w-[45%] space-y-10 text-white">
        <h1 className="scroll-m-20 gap-y-3 text-6xl font-extrabold capitalize tracking-tight lg:text-5xl">
          {heroSectionRef[currentIndex]?.title}
        </h1>
        <blockquote>
          {heroSectionRef[currentIndex]?.subtitle}
        </blockquote>

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
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className, "text-white")}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
