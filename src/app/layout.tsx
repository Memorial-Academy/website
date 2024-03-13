import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "../components/nav";

export const metadata: Metadata = {
  title: "Memorial Academy of Science and Technology",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
