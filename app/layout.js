import localFont from "next/font/local";
import "./globals.css";
import {Inter} from "@next/font/google";

const inter =Inter({
  subsets:['latin']
})

const gilan = localFont({
  src: "./fonts/Gilan-Medium.ttf",  // Corrected the file name and extension
  variable: "--font-gilan",
  weight: "400",  // Specify the weight of the font (medium = 400 or 500 typically)
});
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
  title: "TRI-Design",
  description: "TRI Design | Web Development | 3D Visualization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${gilan.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
