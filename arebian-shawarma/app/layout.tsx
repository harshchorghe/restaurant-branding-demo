import type { Metadata } from "next";
import { Playfair_Display, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/smooth-scroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Arabian Shawarma | Premium Middle Eastern Dining",
  description: "Experience the rich, authentic, and charcoal-grilled flavors of the Middle East. Crafted with organic spices, fresh chicken, and mutton wrap specialties.",
  metadataBase: new URL("https://arabian-shawarma-demo.vercel.app"),
  openGraph: {
    title: "Arabian Shawarma | Premium Middle Eastern Dining",
    description: "Experience the rich, authentic, and charcoal-grilled flavors of the Middle East.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${montserrat.variable} w-full h-full antialiased`}
    >
      <body className="w-full min-h-full flex flex-col bg-bg-primary text-text-primary font-sans selection:bg-brass-primary selection:text-bg-primary">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
