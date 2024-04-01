import Banner from "../components/banner";
import Card from "../components/card";
import { LearnMore } from "../components/card";
import Header from "../components/header";
import Section from "../components/section";

export default function Home() {
    return (
        <>
            <Banner message={"Now enrolling 2024 summer programs!"} link="#programs" />
            {/* <Banner message={"Support the future of high-quality summer camps; donate today!"} link="/donate" /> */}
            <Header
                title="Boost your child's learning!"
                tagline="STEM and Computer Science summer programs for grades 5 - 8, designed to guide kids into real-world tools and skills"
                background="var(--sea-blue-gradient)"
                font=""
            />
            <main>
                <Section heading="Empowering Young Minds"><></></Section>
                <Section heading="Programs">
                    <Card.Left image="./lets_code.svg" header="Let's Code">
                        <p><b>Grades 5-8</b></p>
                        <p><b>Cost: Free</b></p>
                        <p>Whether your student is a complete novice or an experienced developer, Let's Code has something for them! Let's Code has been created with the goal of introducing computer science to students of all backgrounds (regardless of income and background), using real-world tools and techniques. Gain professional skills via lessons led by experienced instructors and self-guided projects designed to grow the creativity and problem-solving skills of students.</p>
                        <LearnMore link="/letscode" />
                    </Card.Left>
                    <Card.Left image="./stemventure.svg" header="STEMpark">
                        <p><b>Grades 3-12; parents welcome!</b></p>
                        <p><b>Cost: Free (No enrollment required*)</b></p>
                        <p>The best way to learn is through shared experiences! Come to the park and join us for fun, detailed, easy-to-understand demonstrations of various STEM topics. Afterwards, students will break off into groups to participate in self-guided activites to solve a problem related to the day's topic.</p>
                        <p>*enrollment required to participate in interactive/hands-on activities</p>
                        <LearnMore link="/stempark" />
                    </Card.Left>
                </Section>
            </main>
        </>
    );
}
