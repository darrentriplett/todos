"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { BlogProvider } from "./providers/BlogContext";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogProvider>{children}</BlogProvider>
      </body>
    </html>
  );
}
