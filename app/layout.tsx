import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import TopLoader from "@/components/Toploader";

const outfit = Outfit({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Code_it_Online",
  description: "Save your code and run",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased h-screen bg-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4 max-w-9xl h-full">
            <TopLoader />
            <Navbar />
            <div className="bg-gray-100 h-[100%]">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
