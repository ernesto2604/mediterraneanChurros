import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mediterranean-churros.vercel.app";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mediterranean Churros",
  description:
    "Premium Spanish churros crafted for fairs, markets and festivals across Switzerland.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Mediterranean Churros",
    description:
      "Premium Spanish churros crafted for fairs, markets and festivals across Switzerland.",
    url: siteUrl,
    siteName: "Mediterranean Churros",
    type: "website",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Mediterranean Churros logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterranean Churros",
    description:
      "Premium Spanish churros crafted for fairs, markets and festivals across Switzerland.",
    images: ["/images/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
