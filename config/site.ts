export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PKB Kabupaten Bandung",
  description: "Official Website of DPC PKB Kabupaten Bandung",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/icons/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/icons/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/icons/android-icon-192x192.png" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "57x57", url: "/icons/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", url: "/icons/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/icons/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/icons/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", url: "/icons/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", url: "/icons/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", url: "/icons/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/icons/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/icons/apple-icon-180x180.png" },
    ],
    shortcut: "/icons/favicon.ico",
  },
  manifest: "/icons/site.webmanifest",
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/icons/ms-icon-144x144.png",
  },
};
