import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Outfit } from "next/font/google"; // Optimized font loading

export const metadata: Metadata = {
  title: {
    default: "CarMandi - Pakistan's Premier Car Auction Marketplace",
    template: "%s | CarMandi",
  },
  description: "Buy and sell cars with confidence on CarMandi. Connect with thousands of verified sellers and buyers in Pakistan's most trusted auto marketplace.",
  keywords: ["cars", "car auction", "buy cars", "sell cars", "Pakistan", "CarMandi", "used cars", "bidding", "auto market"],
  authors: [{ name: "CarMandi Team", url: "https://carmandi.pk" }],
  creator: "CarMandi",
  publisher: "CarMandi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "CarMandi - Boli lagao, Gari Ly Jao",
    description: "The smartest way to buy and sell cars in Pakistan. Join live auctions and get the best deals.",
    url: "https://carmandi.pk",
    siteName: "CarMandi",
    images: [
      {
        url: "/og-image.jpg", // Ensure this asset exists or is replaced
        width: 1200,
        height: 630,
        alt: "CarMandi Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarMandi - Pakistan's #1 Car Auction Platform",
    description: "Join live car auctions and find your dream car at the best price.",
    images: ["/twitter-image.jpg"],
  },

  verification: {
    google: "google-site-verification-code", // Placeholder
  },
  alternates: {
    canonical: "https://carmandi.pk",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
};



const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className={`font-sans antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
