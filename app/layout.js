import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Oscar Portfolio",
  description: "Oscar Sebeloane, front-end developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <AnimatedCursor 
          innerSize={10}
          outerSize={10}
          color='263, 21, 82'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        {children}
      </body>
    </html>
  );
}
