import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.title} — ${site.eventName}`,
  description: `${site.positioning} ${site.datesFull} at ${site.locationName}, ${site.locationRegion}.`,
  robots: { index: false, follow: false },
  icons: {
    icon: "/brand/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="bg-ivory font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
