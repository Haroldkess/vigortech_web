import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Home | VigorTech",
  description: "We build innovative solutions that transform businesses through cutting-edge technology, expert strategy, and seamless integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
