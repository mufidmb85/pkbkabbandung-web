import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import HeroSection from "@/containers/home-page/hero-section";
import LatestNewsSection from "@/containers/home-page/latest-news-section";

export const metadata: Metadata = {
  title: "Home - " + siteConfig.name,
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LatestNewsSection />
    </main>
  );
}
