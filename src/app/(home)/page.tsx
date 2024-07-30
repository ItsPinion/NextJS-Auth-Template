import { GuidesNReports } from "./_component/guides-reports";
import { LatestArticles } from "./_component/latest-articles";
import { LatestNews } from "./_component/latest-news";
import { MarketingSection } from "./_component/marketing";
import { PopulerTools } from "./_component/populer-tools";
import { TopAgencies } from "./_component/top-agencies";

export default function Home() {
  return (
    <div>
      <LatestNews />

      <MarketingSection />

      <LatestArticles />

      <PopulerTools />

      <TopAgencies />

      <GuidesNReports />
    </div>
  );
}
