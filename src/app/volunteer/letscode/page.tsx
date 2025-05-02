import { Metadata } from 'next';
import Card from "@/src/components/card";
import Enroll from "@/src/components/enroll";
import Header from "@/src/components/header";
import Section from "@/src/components/section";
import BulletList from '@/src/components/list';

export const metadata: Metadata = {
    title: "Volunteer at Let's Code | Memorial Academy of Science and Technology",
    description: "Volunteer with MAST and grow your skills while helping other students grow their's!",
    openGraph: {
        title: "Volunteer at Let's Code | Memorial Academy of Science and Technology",
        description: "Volunteer with MAST and grow your skills while helping other students grow their's!",
        url: "https://www.memorialacademy.org/volunteer/letscode",
        images: {
            url: "https://www.memorialacademy.org/lets_code.svg",
            width: 512,
            height: 512,
            alt: "Let's Code logo"
        },
    }
}

const EnrollButton = <Enroll link="https://cloud.memorialacademy.org/apps/forms/s/EBq8qsBJzZskWqosiEYrEoSt" text="Volunteer for Let's Code!" />

export default function Page() {
    return (
        <>
            <Header
                title="Volunteer at Let's Code"
                tagline="Help the next generation unlock their computer science skills!"
                background="var(--lets-code-gradient)"
                font=""
            />
            <main>
                <Section heading="Volunteer for Let's Code!">
                    <Card.Left image='/lets_code.svg' header="Details">
                        <ul>
                            <li>
                                <BulletList title='Dates:' points={[
                                    "Week 1: June 9 - 13",
                                    "Week 2: June 16 - 20"
                                ]} />
                            </li>
                            <li>
                                <BulletList title='Times:' points={[
                                    "Monday - Thursday: 10:00a.m - 3:00p.m",
                                    "Friday: 10:00a.m - 12:00p.m"
                                ]} />
                            </li>
                            <li><b>Location:</b> Virtual</li>
                        </ul>
                    </Card.Left>
                    <p>Do you love computer science? Then Let's Code may be the perfect volunteering opportunity for you! As a volunteer, you'll get to help students debug code, help them understand new coding concepts, and guide them through unique and interesting projects. Volunteers for Let's Code are expected to be passionate and knowledgable about computer science, and should be excited to share their expertise with the next generation!</p>
                </Section>
                <Section heading='Classes'>
                    <p>
                        Our introductory classes introduce students to the basics of computer science. Students will learn how to create variables and functions, how to use conditionals/if-else statements, and other basic concepts.
                        <br/>
                        <b>We're developing improved curriculums and volunteer materials for 2025,</b> making a better experience for both students and volunteers!
                    </p>
                    
                    <h4>Introduction to Game Development with Scratch</h4>
                    <p>Students in this class will use Scratch to create animations and games using Scrath's block-based graphical coding language.</p>
                    <BulletList title="Volunteer Requirements:" points={[
                        "Familiarity with Scratch",
                        "Basic understanding of block-based programming",
                        "Basic understanding of core computer-science concepts (variables, booleans, conditionals, math operators, etc.)"
                    ]}/>
                    
                    <h4>Introduction to Python</h4>
                    <p>Students in this class will learn the basics of computer science via programming with the Python computer language (occassionally in combination with the Turtle drawing library). In addition to learning how to create/use functions, variables, conditionals/if-else statements, and more, students will learn Python's syntax and be able to create simple applications.</p>
                    <BulletList title="Volunteer Requirements:" points={[
                        "Familiarity with Python",
                        "Basic understanding of Python with Turtle",
                        "Understanding of core computer-science concepts (functions, varaibles, conditionals/if-else statements, classes, math operators, console input/output, math operations, etc.)"
                    ]}/>

                    <h4>Introduction to Web Development</h4>
                    <p>Students will learn how to create and design a website using HTML and CSS. Students will also learn basic programming and computer science concepts as they learn how to add interactivity and functionality to their websites with JavaScript.</p>
                    <BulletList title='Volunteer Requirements: ' points={[
                        "Basic amount of familiarity with HTML and CSS is preferred",
                        "Understanding of web/JavaScript specific concepts (event listeners, anonymous functions, callback functions, DOM functions)",
                        "Understanding of core computer-science concepts (variables, booleans, conditionals, math operators, functions, etc.)"
                    ]} />
                </Section>
                <Section heading="Join today!">
                    {/* <p><b>Note:</b> while volunteers are encouraged to request a specific class to volunteer for, the final decision as to which class a volunteer will be assigned to will be based on the skills they provide on their sign-up form.</p>
                    {EnrollButton} */}
                    <p className="closed-signup">
                        <b>Sign-ups open May 2!</b>
                    </p>
                </Section>
            </main>
        </>
    )
}