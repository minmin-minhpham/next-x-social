import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "M&M DEV",
  description: "X clone",
};

export default function RootLayout({ children }) {
  console.log("%cWarning!", "color: red; font-size: 30px; font-weight: bold;");

  console.log(
    "%cThis browser feature is intended for developers. If someone told you to copy and paste something here, it is likely a scam and could compromise your security.",
    "color: black; font-size: 16px;"
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
