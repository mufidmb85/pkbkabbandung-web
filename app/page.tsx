import { Metadata } from "next";

import Toolbar from "@/components/ui/Toolbar";
import { siteConfig } from "@/config/site";
import HeroSection from "@/containers/home-page/hero-section";

export const metadata: Metadata = {
  title: "Home - " + siteConfig.name,
};

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
