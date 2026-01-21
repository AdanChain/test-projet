import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Avenir Next font from local files in app/fonts/
const avenirNext = localFont({
  src: [
    {
      path: "./fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNextLTPro-Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNextLTPro-Heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-avenir-next",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Setapp-style Productivity Suite",
  description: "Dozens of apps. One subscription.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${avenirNext.variable} bg-background text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}

