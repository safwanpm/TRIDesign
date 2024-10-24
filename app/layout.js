import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";  // Correct import from `next/font/google`

// Import Inter from Google Fonts
const inter = Inter({
  subsets: ['latin'],
});

// Import custom local fonts


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",  // Ensure `.woff` file is in the correct folder
  variable: "--font-geist-sans",  // CSS variable for Geist Sans font
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",  // Ensure `.woff` file is in the correct folder
  variable: "--font-geist-mono",  // CSS variable for Geist Mono font
});

export const metadata = {
  title: "TRI-Design",
  description: "TRI Design | Web Development | 3D Visualization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`$ ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
