import { Metadata } from 'next';
import Header from "../../components/header";

export const metadata: Metadata = {
    title: "STEMventure | Memorial Academy of Science and Technology",
    description: "Computer Science summer camp for sixth through eigth graders."
}

export default function Page() {
    return (
        <>
            <Header
                title="STEMventure"
                tagline="Hands-on experiment-based STEM summer camp for grades 6-8"
                background="linear-gradient(135deg, #8cff35 0%, #19e449 45%, #09830b 98%)"
            />
            <main>
                
            </main>
        </>
    );
}