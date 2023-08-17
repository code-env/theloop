import "@/styles/globals.css";

import { Metadata } from "next";
// import { Toaster } from "@/providers/Provider";

export const metadata: Metadata = {
  title: {
    default: "Theloop",
    template: "%s | Theloop",
  },
  description:
    "Transforming Ideas into Digital Success Stories - Crafting Engaging Websites & Powerful Web Applicationsfor Small Businesses",
  openGraph: {
    title: "Theloop",
    description:
      "Transforming Ideas into Digital Success Stories - Crafting Engaging Websites & Powerful Web Applicationsfor Small Businesses",
    url: "https://theloop.space",
    siteName: "theloop.space",
    images: [
      {
        url: "/https://theloop.space/placeholder.png",
        width: 2322,
        height: 1306,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Theloop",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "./icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* <Toaster /> */}
      <body className="font-inter">{children}</body>
    </html>
  );
}