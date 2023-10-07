import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SnabbTech Assignment",
  description:
    "This is a simple application that allows you to fill up a form and its content shown in table.",
  author: "Faisal Husain Shaikh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
