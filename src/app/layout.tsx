import { Inter } from "next/font/google";
import Header from "./components/Header";
// import HeaderLayout from "./components/HeaderLayout";
import Footer from "./components/Footer";
import VerticalBars from "./components/VerticalBars";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextHire",
  description: "Find and post jobs with ease on NextHire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderLayout /> */}
        <Header />
        <main>{children}</main>
        <VerticalBars />
        <Footer />
      </body>
    </html>
  );
}
