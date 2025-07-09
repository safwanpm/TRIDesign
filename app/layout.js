import localFont from "next/font/local";
import "./globals.css";



const dominik = localFont({
  src: "./fonts/Dominik.ttf",
  variable: "--font-dominik",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",  // Ensure `.woff` file is in the correct folder
  variable: "--font-geist-sans",  // CSS variable for Geist Sans font
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",  // Ensure `.woff` file is in the correct folder
  variable: "--font-geist-mono",  // CSS variable for Geist Mono font
});

export const metadata = {
  title: "vexa-architect",
  description: "Think | Draw | Build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`$ ${geistSans.variable} ${geistMono.variable} ${dominik.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
