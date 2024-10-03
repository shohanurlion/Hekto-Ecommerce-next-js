import localFont from "next/font/local";
import "./globals.css";
import Header from "./Componnents/Header";
import Footer from "./Componnents/Footer";
import Navbar from "./Componnents/Navbar";
import "slick-carousel/slick/slick.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
