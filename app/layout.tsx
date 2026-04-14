import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaza Rift Ventures | Healthcare Venture Capital · Africa",
  description:
    "Catalyzing positive change in healthcare across Africa through targeted investments, expert advisory, and ground-level innovation — from pre-Seed to Series A and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
