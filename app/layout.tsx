import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About.jiyoon",
  description: "JIYOON KIM IS A GRAPHIC DESIGNER BASED IN SEOUL.",
  openGraph: {
    images:
      "https://66.media.tumblr.com/c8f32019bc96ba5933ab510402469003/tumblr_pyhite6Mec1tg9xy0o1_1280.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
