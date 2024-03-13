import { Metadata } from 'next';
import Header from "../../components/header";

export const metadata: Metadata = {
    title: "Let's Code | Memorial Academy of Science and Technology",
    description: "Computer Science summer camp for sixth through eigth graders."
}

export default function Page() {
    return (
        <>
            <Header
                title="Let's Code"
                tagline="Computer science summer camp with real world tools and skills for grades 6-8"
                background="linear-gradient(135deg, #ffcc35 0%, #f99000 45%, #ff611f 98%)"
            />
            <main>
                
            </main>
        </>
    );
}