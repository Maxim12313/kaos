import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        <div className="mt-32">{children}</div>
      </body>
    </html>
  );
}
