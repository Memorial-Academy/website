import { Metadata } from 'next';
import Header from "../../components/header";
import Card from "../../components/card";
import Section from "../../components/section";

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
                        <li><b>Location:</b> Virtual</li>
                        <li><b>Grades:</b> 6 - 8</li>
                        <li><b>Cost:</b> Free</li>
                    </ul>
                </Card.Left>
                <Section heading='Classes'>
                    <Card.Norm header='Introduction to Python'>
                        <p>Introduction to Python introduces students to text-based programming using the Python programming language. Students will learn the basics of programming, such as creating a variables, using if-else statements, and common algorithms. Students will leave the class prepared with the skills to participate advanced computer science classes.</p>
                    </Card.Norm>
                    <Card.Norm header='Introduction to Game Development with Scratch'>
                        <p>Introduction to Game Development is our most introductory class, offering students an introduction to both general programming concepts and game development. Students will use Scratch's block-based programming language to create their own apps and 2D games.</p>
                    </Card.Norm>
                    <Card.Norm header='Introduction to Web Development'>
                        <p>Introduction to Web Development teaches students the basic of developing a website, offering them an introduction to a variety of programming concepts (ranging from user-interface designing to the similar text-based programming concepts seen in Introduction to Python). Students will go from creating simple text-only webpages to professionally-styled multi-page websites with extensive functionality.</p>
                    </Card.Norm>
                    <Card.Norm header="Advanced Programming with Python">
                        <p></p>
                    </Card.Norm>
                    <Card.Norm header="Advanced Web Development">
                        <p></p>
                    </Card.Norm>
                </Section>
            </main>
        </>
    );
}