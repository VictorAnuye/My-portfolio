// import type { Metadata } from "next";
// import {Montserrat} from "next/font/google"
import "./globals.css";
import Navbar from "@/app/Navbar"


// const montserrrat_thin_300= Montserrat({
//   subset:["latin"],
//   weight:"300"
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata= {
  title: "Victor Anuye",
  description: "portfolio",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
