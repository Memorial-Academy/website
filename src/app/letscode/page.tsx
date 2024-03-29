import { Metadata } from 'next';
import Header from "../../components/header";

export const metadata: Metadata = {
    title: "Let's Code | Memorial Academy of Science and Technology",
    description: "Computer Science summer camp for fifth through eigth graders."
}

export default function Page() {
    return (
        <>
            <Header
                title="Let's Code"
                tagline="Computer science summer camp with real world tools and skills for grades 5-8"
                background="var(--lets-code-gradient)"
                font="Kode Mono"
            />
            <main>
                
            </main>
        </>
    );
}