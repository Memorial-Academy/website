import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const metadata: Metadata = {
    title: "Memorial Academy of Science and Technology",
    description: "Empowering young minds to explore STEM and computer science, unlocking new opportunities for the next generation.",
    openGraph: {
        title: "Memorial Academy of Science and Technology",
        description: "Empowering young minds to explore STEM and computer science, unlocking new opportunities for the next generation.",
        url: "https://www.memorialacademy.org",
        siteName: "Memorial Academy of Science and Technology",
        images: {
            url: "https://www.memorialacademy.org/seal.svg",
            width: 512,
            height: 512,
            alt: "MAST seal"
        },
        locale: "en_US",
        type: "website"
    }
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
                <Footer />
            </body>
        </html>
    );
}
