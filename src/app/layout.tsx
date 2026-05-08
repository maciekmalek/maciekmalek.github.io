import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maciek Małek",
  description: "Personal website of Maciek Małek, a software developer specializing in frontend development and architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><div className="grid grid-cols-2 grid-rows-1 gap-4">
    <div className="row-span-2"><Navbar/></div>
    <div className="col-span-1 row-span-2">{children}</div>
</div>
        </body>
    </html>
  );
}
