import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iMessenger",
  description:
    "iMessenger it's a clone of messenger which is written vishu verma aka vishucodes and it's built for learning/practice perpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
