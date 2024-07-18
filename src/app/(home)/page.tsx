import { LatestArticles } from "./_component/latest-articles";
import { LatestNews } from "./_component/latest-news";
import { MarketingSection } from "./_component/marketing";

export default function Home() {
  return (
    <div>
      <LatestNews />

     <MarketingSection/>

     <LatestArticles/>
    </div>
  );
}


