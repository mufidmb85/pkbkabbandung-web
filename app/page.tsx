import { Metadata } from "next";

import Toolbar from "@/components/ui/Toolbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home - " + siteConfig.name,
};

export default function Home() {
  return (
    <main>

    </main>
  );
}
