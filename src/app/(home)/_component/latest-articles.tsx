import Image from "next/image";

export function LatestArticles() {
  return (
    <div className="p-24">
      <h1 className="text-center text-4xl font-bold">Latest Articles</h1>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-lg border border-black p-4 shadow-md"></div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-black p-4 shadow-md"></div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-black p-4 shadow-md"></div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-black p-4 shadow-md"></div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-black p-4 shadow-md"></div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-black p-4 shadow-md"></div>
      </div>
    </div>
  );
}
