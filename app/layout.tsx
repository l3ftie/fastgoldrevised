import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fast Gold Africa",
  description: "Buy Gold Globally with ease and peace of mind with Fast Gold Africa",
  icons: "/favicon.png",
  keywords: "fast gold africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#000401] text-gray-300 px-6 md:p-0">{children}</body>
    </html>
  );
}
