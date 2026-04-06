import "./globals.css";
import { Metadata } from "next";
import { getProfileSection } from "@/utils/profileData";

// Get basic info
const basics = getProfileSection("basics");

export const metadata: Metadata = {
  title: {
    template: `%s | ${basics.name}`,
    default: `${basics.name} - ${basics.title}`,
  },
  description: basics.metaDescription,
  keywords: [
    "machine learning",
    "medical imaging",
    "applied ai",
    "quantitative research",
    "llm systems",
  ],
  authors: [{ name: basics.name }],
  creator: basics.name,
  metadataBase: new URL("https://agaresd47.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agaresd47.github.io",
    siteName: `${basics.name} - Portfolio`,
    title: `${basics.name} - ${basics.title}`,
    description: basics.metaDescription,
    images: [
      {
        url: "https://agaresd47.github.io/profile.jpg",
        width: 1200,
        height: 630,
        alt: `${basics.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${basics.name} - ${basics.title}`,
    description: basics.metaDescription,
    images: ["https://agaresd47.github.io/profile.jpg"],
    creator: "@Agaresd47",
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
  alternates: {
    canonical: "https://agaresd47.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
