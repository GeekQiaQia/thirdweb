import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import '@rainbow-me/rainbowkit/styles.css';
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-game" });

export const metadata = {
  title: "RandomWinnerGame",
  description: "RandomWinnerGame for who joined the game",
};

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pressStart.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
