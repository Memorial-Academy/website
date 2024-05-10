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
                tagline="Help the next generation unlock their computer science skills"
                background="var(--sea-blue-gradient)"
                font=""
            />
            <main>
                <Section heading="Volunteer for Let's Code!">
                    <Card.Left image='/lets_code.svg' header="Details">
                        <ul>
                            <li>
                                <BulletList title='Dates:' points={[
                                    "Week 1: June 3 - 7",
                                    "Week 2: June 10 - 14",
                                    "Week 3: June 17 - 21"
                                ]} />
                            </li>
                            <li>
                                <BulletList title='Times:' points={[
                                    "Monday - Thursday: 9:00a.m - 3:30p.m",
                                    "Friday: 9:00a.m - 10:30a.m"
                                ]} />
                            </li>
                            <li><b>Location:</b> Virtual</li>
                        </ul>
                    </Card.Left>
                    <p>Do you love computer science? Then Let's Code may be the perfect volunteering opportunity for you! As a volunteer, you'll get to help students debug code, help them understand new coding concepts, and guide them through unique and interesting projects. Volunteers for Let's Code are expected to be passionate and knowledgable about computer science, and should be excited to share their expertise with the next generation!</p>
                    {EnrollButton}
                </Section>
                <Section heading='Classes'>
                    <Card.Half 
                        left={
                            <>
                                <h4>Introductory Classes</h4>
                                <p>These classes introduce students to the basics of computer science. Students will learn how to create variables and functions, how to use conditionals/if-else statements, and other basic concepts.</p>
                                
                                <h5>Introduction to Game Development with Scratch</h5>
                                <p>Students in this class will use Scratch to create animations and games using Scrath's block-based graphical coding language.</p>
                                <BulletList title="Volunteer Requirements:" points={[
                                    "Familiarity with Scratch",
                                    "Basic understanding of block-based programming",
                                    "Basic understanding of core computer-science concepts (variables, booleans, conditionals, math operators, etc.)"
                                ]}/>

                                <h5>Introduction to Python</h5>
                                <p>Students in this class will learn the basics of computer science via programming with the Python computer language (occassionally in combination with the Turtle drawing library). In addition to learning how to create/use functions, variables, conditionals/if-else statements, and more, students will learn Python's syntax and be able to create simple applications.</p>
                                <BulletList title="Volunteer Requirements:" points={[
                                    "Familiarity with Python",
                                    "Basic understanding of Python with Turtle",
                                    "Understanding of core computer-science concepts (functions, varaibles, conditionals/if-else statements, classes, math operators, console input/output, math operations, etc.)"
                                ]}/>

                                <h5>Introduction to Web Development</h5>
                                <p>Students will learn how to create and design a website using HTML and CSS. Students will also learn basic programming and computer science concepts as they learn how to add interactivity and functionality to their websites with JavaScript.</p>
                                <BulletList title='Volunteer Requirements: ' points={[
                                    "Basic amount of familiarity with HTML and CSS is preferred",
                                    "Understanding of web/JavaScript specific concepts (event listeners, anonymous functions, callback functions, DOM functions)",
                                    "Understanding of core computer-science concepts (variables, booleans, conditionals, math operators, functions, etc.)"
                                ]} />
                            </>
                        }
                        right={
                            <>
                                <h4>Advanced Classes</h4>
                                <p>These classes expand on the skills introduced in introductory classes. Advanced classes are intended to provide students the knowledge and skills normally found in advanced/high-level computer science courses.</p>

                                <h5>Advanced Programming with Python</h5>
                                <p>Students will expand on their existing programming skills by exploring advanced programming concepts via the Python computer language. Students will be able to create high-level algorithms and work with data to create complex applications.</p>
                                <BulletList title="Volunteer Requirements: " points={[
                                    "Advanced understanding of computer science (ideally the completion of an advanced computer science course)",
                                    "Strong familiarity with Python",
                                    "Ability to explain complex concepts and/or break them down into simple terms/steps"
                                ]} />

                                <h5>Advanced Web Development</h5>
                                <p>Students will expand on the skills they learnt in Introduction to Web Development by designing, building, and deploying highly complex full-stack web applications. They will combine complex programming concepts with networking, servers, databases, and other highly advanced computer science concepts to create unique, interactive, and technologically complex web applications.</p>
                                <BulletList title="Volunteer Requirements: " points={[
                                    "Advanced understanding of computer science (ideally the completion of an advanced computer science course)",
                                    "Familiarity with frontend web development",
                                    "Basic understanding of networking/servers",
                                    "Ability to explain complex concepts and/or break them down into simple terms/steps"
                                ]} />
                            </>
                        }
                    />
                </Section>
                <Section heading="Join today!">
                    <p><b>Note:</b> while volunteers are encouraged to request a specific class to volunteer for, the final decision as to which class a volunteer will be assigned to will be based on the skills they provide on their sign-up form.</p>
                    {EnrollButton}
                </Section>
            </main>
        </>
    )
}