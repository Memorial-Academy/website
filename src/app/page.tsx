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
                <Section heading="Empowering Young Minds">
                    <>
                        <p>The Memorial Academy of Science and Technology (MAST) was founded to provide students of all background, especially those from low-income/low-opportunity programs, to gain access to high quality learning experiences. We pride ourselves in offering programs developed by passionate students, highly experienced in their respective fields, that are designed with three goals in mind:</p>
                        <ol>
                            <li><b>Use real world tools/lessons.</b> Most summer camps use proprietary tools. While these can be useful, these skills are difficult to expand on. All of our programs use tools accessible from home, allowing students to continue learning and experimenting after leaving MAST!</li>
                            <li><b>No-cost or low-cost programs.</b> We believe access to high-quality education and learning opportunities is a right; a person's economic background should not limit their ability to learn and grow! For that reason, we strive to ensure all of our programs are either free, or have a minimal cost.</li>
                            <li><b>Combine instructor-led demonstrations with student-led learning.</b> Instructors should act as catylists in a student's learning experience. Our programs begin with short lessons packed with interactive demonstrations, led by our passionate & experience instructors, to give students a foundation to build upon. Then, we switch to student-led activities, where students will have to use their creativity and knowledge (with the supports of our volunteers and instructors) to apply their and grow their skills.</li>
                        </ol>
                        <p>MAST's programs allow students to unlock new skills and explore new career paths in an environment especially designed to ensure success and foster creativity and learning. All are welcome to enroll!</p>
                    </>
                </Section>
                <Section heading="Programs">
                    <Card.Left image="./lets_code.svg" header="Let's Code">
                        <p><b>Grades 5-8</b></p>
                        <p><b>Cost: Free</b></p>
                        <p>Whether your student is a complete novice or an experienced developer, Let's Code has something for them! Let's Code has been created with the goal of introducing computer science to students of all backgrounds (regardless of income and background), using real-world tools and techniques. Gain professional skills via lessons led by experienced instructors and self-guided projects designed to grow the creativity and problem-solving skills of students.</p>
                        <LearnMore link="/letscode" />
                    </Card.Left>
                    <Card.Left image="./stempark.svg" header="STEMpark">
                        <p><b>Grades 2-8; parents welcome!</b></p>
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
