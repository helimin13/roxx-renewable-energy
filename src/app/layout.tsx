import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roxx Renewable Energy LLP | Leading Indian Solar & Green Solutions",
  description: "Roxx Renewable Energy LLP is a premium Indian renewable energy company. We deliver state-of-the-art solar rooftop installation, commercial wind systems, industrial EPC projects, net metering, and expert green energy consultation.",
  keywords: "solar rooftop, industrial solar india, residential solar, wind turbine installation, solar subsidy gujarat, net metering, green energy, PM surya ghar yojna, solar maintenance, Roxx Renewable Energy",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-slate-100 font-sans selection:bg-energy-green selection:text-dark-bg">
        {children}
      </body>
    </html>
  );
}
