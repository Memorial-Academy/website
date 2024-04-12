import { Metadata } from 'next';
import Header from "../../components/header";
import Card from "../../components/card";
import Section from "../../components/section";
import Enroll from '../../components/enroll';

export const metadata: Metadata = {
    title: "Let's Code | Memorial Academy of Science and Technology",
    description: "Computer Science summer camp for fifth through eigth graders."
}

const IntroEnrollButton = <Enroll text="Enroll in Introductory Classes" link="https://cloud.memorialacademy.org/apps/forms/s/SBXyemr9kjGEtg7WLBwtF8aj" />
const AdvEnrollButton = <Enroll text="Enroll in Advanced Classes" link="https://cloud.memorialacademy.org/apps/forms/s/cksH6pJt69P2SAaG55GJJXPm" />

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
                <Card.Left image="/lets_code.svg || Let's Code logo" header="Details">
                    <ul>
                        <li>
                            <b>Dates:</b>
                            <ul>
                                <li>Week 1: June 3 - 7</li>
                                <li>Week 2: June 10 - 14</li>
                                <li>Week 3: June 17 - 21</li>
                            </ul>
                        </li>
                        <li>
                            <b>Times:</b>
                            <ul>
                                <li>Monday - Thursday: 9:00a.m - 3:30p.m</li>
                                <li>Friday: 9:00a.m - 10:30a.m</li>
                            </ul>
                        </li>
                        <li><b>Location:</b> Virtual</li>
                        <li><b>Grades:</b> 6 - 8</li>
                        <li><b>Cost:</b> Free</li>
                    </ul>
                </Card.Left>
                <Section heading='Classes'>
                    <Card.Half left={
                        <>
                            <h4>Introductory Classes</h4>
                            <p>Introductory classes are one-week classes that introduce students to the basics of computer science and programming. They assume zero prior knowledge and provide students a simple introduction to real-world tools and techniques.</p>
                            <p><b>When do these classes take place?</b></p>
                            <ul>
                                <li>Session 1: June 3 - 7</li>
                                <li>Session 2: June 10 - 14</li>
                                <li>Session 3: June 17 - 21</li>
                            </ul>
                            <p><b>Which classes are "introductory classes"?</b></p>
                            <ul>
                                <li>Introduction to Python</li>
                                <li>Introduction to Game Development with Scratch</li>
                                <li>Introduction to Web Development</li>
                            </ul>
                            {/* <p><b><a href="">Enroll in Introductory Classes</a></b></p> */}
                            {IntroEnrollButton}
                        </>
                    } right={
                        <>
                            <h4>Advanced Classes</h4>
                            <p>Advanced classes are two-week long classes that build off the existing skills of students (such as the skills they learnt at a Let's Code Introductory Class). These classes focus on teaching students how to take their skills and apply them to a computer science profession. Students will expand on their existing knowledge to learn complex topics and build advanced applications.</p>
                            <p><b>When do these classes take place?</b></p>
                            <ul>
                                <li>Session 1: June 10 - 14 & June 17 - 21</li>
                            </ul>
                            <p><b>Which classes are "advanced classes"?</b></p>
                            <ul>
                                <li>Advanced Programming with Python</li>
                                <li>Advanced Web Development</li>
                            </ul>
                            <p>
                                <b>Can my student take an introductory class and an advanced class in the same year?</b>
                                <br/>
                                Absolutely! We scheduled Let's Code to ensure that students can take an introductory class during week one (June 3 - 7) and then take an advanced class for the remaining two weeks (June 10 - 14 & June 17 - 21).
                            </p>
                            {/* <p><b><a href="">Enroll in Advanced Classes</a></b></p> */}
                            {AdvEnrollButton}
                        </>
                    } />
                    <Card.Norm header='Introduction to Python'>
                        <p>Introduction to Python introduces students to text-based programming using the Python programming language. Students will learn the basics of programming, such as creating a variables, using if-else statements, and common algorithms. Students will leave the class prepared with the skills to participate advanced computer science classes.</p>
                    </Card.Norm>
                    <Card.Norm header='Introduction to Game Development with Scratch'>
                        <p>Introduction to Game Development is our most introductory class, offering students an introduction to both general programming concepts and game development. Students will use Scratch's block-based programming language to create their own apps and 2D games.</p>
                    </Card.Norm>
                    <Card.Norm header='Introduction to Web Development'>
                        <p>Introduction to Web Development teaches students the basic of developing a website, offering them an introduction to a variety of programming concepts (ranging from user-interface designing to the similar text-based programming concepts seen in Introduction to Python). Students will start by creating simple text-only webpages to and finish with professionally-styled multi-page websites with extensive functionality.</p>
                    </Card.Norm>
                    <Card.Norm header="Advanced Programming with Python">
                        <p>
                            Advanced Programming with Python builds off of a student's pre-existing coding knowledge, introducing them to complex, high-level programming concepts. Students will learn data strucutres, complex programming paradigms (such as object-oriented programming), and other skills necessary to make complex applications.
                        </p>
                        <p>
                            Note: pre-requisite programming knowledge required (Introduction to Python or a school-taught "fundamentals of computer science" course is sufficient)
                        </p>
                    </Card.Norm>
                    <Card.Norm header="Advanced Web Development">
                        <p>
                            Advanced Web Development is our most encompassing class, with students designing user interfaces, programming functionality for users, writing software to run on servers, and connecting it all together via the internet! Building off of the concepts covered in Introduction to Web Development, students will start by creating simple web-applications, before combining them with server-side applications to add extra functionality, ranging from authenticating users to creating messaging applications.
                        </p>
                        <p>
                            Note: pre-requisite programming and web-development (specifically front-end web development) knowledge required (Introduction to Web Development is highly recommended, although most school-taught courses will provide a sufficient introduction)
                        </p>
                    </Card.Norm>
                </Section>
                <Section heading="The Let's Code Experience">
                    <Card.Image src="/lets_code_img/whiteboard1.jpg" alt={"\"Let's Code\" written on a whiteboard"}/>
                    <Card.Norm header='A Normal Day'>
                        <h5>Morning Activities (9:00a.m - 12:00p.m)</h5>
                        <p>Students arrive and start the day with a lesson covering a new computer science topic. Students will get to participate in interactive, hands-on demonstrations as their instructors provide extensive insight. After the lesson finishes, students are tasked to demonstrate their newly learned skills via a self-guided projected.</p>
                        <h5>Lunch (12:00p.m - 1:00p.m)</h5>
                        <h5>Afternoon Activities (1:00p.m - 3:30p.m)</h5>
                        <p>Instructors introduce a new lesson, expanding on the topics covered that morning. Students will then be able to create a new project to practice their expanded skillset, or build off of their morning project to add additional functionality.</p>
                    </Card.Norm>
                    <Card.Norm header='Capstone Project'>
                        <p>At the conclusion of each class, students will work in a small team or by themselves to create a project showcasing all the skills they learned while at camp. These projects have no prompt and are entirely imagined and created by the student! They'll receive the entirety of Thursday's camp to work on these projects, with Friday's short session being used to present these projects to classmates. Family members are welcome to join!</p>
                    </Card.Norm>
                </Section>
               <Section heading='Sign up today!'>
                   {IntroEnrollButton}
                   {AdvEnrollButton}
                   <p>Questions? Concerns? Contact <a href="mailto:letscode@memorialacademy.org">letscode@memorialacademy.org</a></p>
               </Section>
            </main>
        </>
    );
}