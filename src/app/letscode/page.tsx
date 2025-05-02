import { Metadata } from 'next';
import Header from "../../components/header";
import Card from "../../components/card";
import Section from "../../components/section";
import Enroll from '../../components/enroll';
import BulletList from '@/src/components/list';

export const metadata: Metadata = {
    title: "Let's Code | Memorial Academy of Science and Technology",
    description: "Computer Science summer camp for fifth through eigth graders.",
    openGraph: {
        title: "Let's Code | Memorial Academy of Science and Technology",
        description: "Computer Science summer camp for fifth through eigth graders.",
        url: "https://www.memorialacademy.org/letscode",
        images: {
            url: "https://www.memorialacademy.org/lets_code.svg",
            width: 512,
            height: 512,
            alt: "Let's Code logo"
        },
    }
}

const EnrollButton = <Enroll text="Enroll in Advanced Classes" link="https://cloud.memorialacademy.org/apps/forms/s/cksH6pJt69P2SAaG55GJJXPm" />

export default function Page() {
    return (
        <>
            <Header
                title="Let's Code"
                tagline="Computer science summer camp with real world tools and skills for grades 5-8, with new curriculums for 2025!"
                background="var(--lets-code-gradient)"
                font="Kode Mono"
            />
            <main>
                <Card.Left image="/lets_code.svg || Let's Code logo" header="Details">
                    <ul>
                        <li>
                            <b>Dates:</b>
                            <ul>
                                <li>Week 1: June 9 - 13</li>
                                <li>Week 2: June 16 - 19</li>
                            </ul>
                        </li>
                        <li>
                            <b>Times:</b>
                            <ul>
                                <li>Monday - Thursday: 10:00a.m - 3:00p.m</li>
                                <li>Friday: 10:00a.m - 12:00p.m</li>
                            </ul>
                        </li>
                        <li><b>Location:</b> Virtual</li>
                        <li><b>Grades:</b> 5 - 8</li>
                        <li><b>Cost:</b> Free</li>
                    </ul>
                </Card.Left>
                <Section heading='Classes'>
                    <p>Our introductory classes are one-week classes that introduce students to the basics of computer science and programming. They're perfect for absolute beginners, student coders looking to refine their skills, and all other students ready to become a computer scientist!</p>
                    <p>
                        <b>New for 2025: brand new curriculums!</b>&nbsp;
                        We've redesigned all of our introductory curriculums to provide the most comprehensive and high-quality learning experience possible.
                        Whether you're a new student or a returning student, we've got new and exciting things to share with you!
                    </p>
                    <SignupNotice/>

                    <Card.Norm header='Introduction to Python'>
                        <p>Introduction to Python introduces students to text-based programming using the Python programming language. Students will learn the basics of programming, such as creating a variables, using if-else statements, and common algorithms. Students will leave the class prepared with the skills to participate advanced computer science classes.</p>
                    </Card.Norm>
                    <Card.Norm header='Introduction to Game Development with Scratch'>
                        <p>Introduction to Game Development is our most introductory class, offering students an introduction to both general programming concepts and game development. Students will use Scratch's block-based programming language to create their own apps and 2D games.</p>
                    </Card.Norm>
                    <Card.Norm header='Introduction to Web Development'>
                        <p>Introduction to Web Development teaches students the basic of developing a website, offering them an introduction to a variety of programming concepts (ranging from user-interface designing to the similar text-based programming concepts seen in Introduction to Python). Students will start by creating simple text-only webpages to and finish with professionally-styled multi-page websites with extensive functionality.</p>
                    </Card.Norm>
                    <p>
                        <b>What happened to the advanced classes?</b>
                        <br/>
                        Last year, we introduced two new advanced classes. For summer 2025, we're pausing these programs to ensure we can provide a few incredible classes with brand new activities to all students instead of hosting a lot of "good" classes.
                    </p>
                </Section>
                <Section heading="The Let's Code Experience">
                    <Card.Image src="/lets_code_img/whiteboard1.jpg" alt={"\"Let's Code\" written on a whiteboard"}/>
                    <Card.Norm header='A Normal Day'>
                        <h5>Morning Activities (10:00a.m - 12:00p.m)</h5>
                        <p>Students arrive and start the day with a lesson covering a new computer science topic. Students will get to participate in interactive, hands-on demonstrations as their instructors provide extensive insight. After the lesson finishes, students are tasked to demonstrate their newly learned skills via a self-guided projected.</p>
                        <h5>Lunch & Office hours (12:00p.m - 1:00p.m)</h5>
                        <p>Students are encouraged to leave and take a break or hang out with their friends in breakout rooms. Alternatively, instructors will be available in meeting rooms to ask questions and provide help.</p>
                        <h5>Afternoon Activities (1:00p.m - 3:00p.m)</h5>
                        <p>Instructors introduce a new lesson, expanding on the topics covered that morning. Students will then be able to create a new project to practice their expanded skillset, or build off of their morning project to add additional functionality.</p>
                    </Card.Norm>
                    <Card.Norm header='Capstone Project'>
                        <p>At the conclusion of each class, students will work in a small team or by themselves to create a project showcasing all the skills they learned while at camp. These projects have no prompt and are entirely imagined and created by the student! They'll receive the entirety of Thursday's camp to work on these projects, with Friday's short session being used to present these projects to classmates. Family members are welcome to join!</p>
                    </Card.Norm>
                </Section>
               <Section heading='Sign up today!'>
                   {/* {IntroEnrollButton}
                   {AdvEnrollButton}
                   <p>Questions? Concerns? Contact <a href="mailto:letscode@memorialacademy.org">letscode@memorialacademy.org</a></p> */}
                   <SignupNotice/>
               </Section>
            </main>
        </>
    );
}

function SignupNotice() {
    return (
        <p className="closed-signup">
            <b>Get ready for a week of fun coding adventures!</b> Signups open on May 2!
        </p>
    )
}