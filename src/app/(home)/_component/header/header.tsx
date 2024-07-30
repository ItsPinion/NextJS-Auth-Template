"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HomeNav } from "./header-nav";
import { HeroSection } from "./hero-section";
import { SearchInput } from "./search-input";
import { SearchIcon } from "./search-icon";

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

export function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSectionRef.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + heroSectionRef.length) % heroSectionRef.length,
    );
  };

  return (
    <div className="relative h-screen w-full">
      <HeroSection
        heroSectionRef={heroSectionRef}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        nextImage={nextImage}
        prevImage={prevImage}
      />
      <header className="absolute left-0 top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-[#0000000f] to-black p-4 text-white">
        <div className="flex items-center space-x-4">
          <Logo className="scale-90" textColor="white" />
          <HomeNav />
        </div>
        <div className="hidden items-center space-x-4 lg:flex">
          <Button className="rounded-md bg-pink-600 px-4 py-2 text-white">
            Benchmark Report 2024
          </Button>
          {showSearch ? (
            <SearchInput />
          ) : (
            <Button
              onClick={() => setShowSearch(!showSearch)}
              variant="ghost"
              size="icon"
              className="h-10 w-10 bg-primary"
            >
              <SearchIcon className="h-6 w-6 text-gray-700" />
            </Button>
          )}
        </div>
      </header>
    </div>
  );
}
