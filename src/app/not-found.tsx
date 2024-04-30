import { Metadata } from 'next';
import Card from "@/src/components/card";
import Header from "@/src/components/header";
import Section from "@/src/components/section";

export const metadata: Metadata = {
    title: "Page Not Found | Memorial Academy of Science and Technology",
    description: "This page does not exist.",
    openGraph: {
        title: "Page Not Found | Memorial Academy of Science and Technology",
        description: "This page does not exist.",
        url: "https://www.memorialacademy.org/",
        images: {
            url: "https://www.memorialacademy.org/seal.svg",
            width: 512,
            height: 512,
            alt: "MAST seal"
        },
    }
}

export default function NotFound() {
    return (
        <>
            <Header
                title="Error 404"
                tagline="Page Not Found"
                background="var(--sea-blue-gradient)"
                font="Kode Mono"
            />
            <main>
                <Section heading='Whoops!'>
                    <p>We couldn't find this page. Are you sure it exists?</p>
                    <p>Check for mis-spellings in the URL. Otherwise try navigating from the <a href="/">homepage</a>.</p>
                </Section>
            </main>
        </>
    )
}