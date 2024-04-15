import { Metadata } from 'next';
import Card from "@/src/components/card";
import Header from "@/src/components/header";
import Section from "@/src/components/section";
import BioCards from '@/src/components/bio-card';

export const metadata: Metadata = {
    title: "About | Memorial Academy of Science and Technology",
    description: "Learn more about the mission and history of the Memorial Academy of Science and Technology",
    openGraph: {
        title: "About | Memorial Academy of Science and Technology",
        description: "Learn more about the mission and history of the Memorial Academy of Science and Technology",
        url: "https://www.memorialacademy.org/about",
        images: {
            url: "https://www.memorialacademy.org/seal.svg",
            width: 512,
            height: 512,
            alt: "MAST seal"
        },
    }
}

export default function Page() {
    return (
        <>
            <Header
                title="About Us"
                tagline=""
                background="var(--sea-blue-gradient)"
                font=""
            />
            <main>
                <Section heading="Our History">
                    <Card.Left image='/about/lets_code_old.png' header='2021'>
                        <p>
                           In the spring of 2021, four students from Stratford High School in Houston, Texas, set out to create a coding summer camp dedicated to allowing students from low-income backgrounds to gain an introduction to computer science. This summer camp became known as Let's Code, and launches as a virtual summer camp with just two classes.
                        </p>
                    </Card.Left>
                    <Card.Norm header='2022'>
                        <p>After the success of the first year, Let's Code becomes affiliated with the local school district, allowing the camp to switch from a virtual summer camp to an in-person camp with three introductory classes. The summer camp in 2022 sees approximately 100 students and 20 volunteers attend over the course of two weeks.</p>
                    </Card.Norm>
                    <Card.Norm header='2023'>
                        <>
                            <p>
                                Two sophomores are bought on to Let's Code's executive board, replacing three graduated students. Let's Code continues running it's three introductory classes and sees over 80 students and approximately 15 volunteers.
                            </p>
                            <p>
                                Meanwhile, another sophomore begins preparing plans for a STEM-based summer camp (simply referred to as "STEM Camp"), and enlists the help of one of Let's Code's president.
                            </p>
                            <p>However, in the fall of 2023, budget cuts begin to strike Let's Code's affiliated school district, resulting in a cancellation of all school-affiliated summer camps, including Let's Code and the still-being-planned STEM Camp.</p>
                        </>
                    </Card.Norm>
                    <Card.Right header='2024' image='/seal.svg'>
                        <>
                            <p>
                                Both the Let's Code and STEM Camp teams set big goals for 2024, aiming to add new classes to Let's Code and launch STEM Camp. However 2023's budget cuts replaced these goals with discussions and meetings in an attempt to find a new home for both camps.
                            </p>
                            <p>
                                To the dismay of both the school and the leadership teams, the discussions failed to keep Let's Code and STEM Camp running with their school affiliation, and as a result, the Memorial Academy of Science and Technology (a.k.a "MAST") was formed.
                            </p>
                            <p>
                                MAST combines Let's Code and STEM Camp (now STEMpark) into one organization, being led by several veterans of summer camp leadership, including the original founding team for Let's Code, the current board of Let's Code, and the founding team for STEMpark.
                            </p>
                        </>
                    </Card.Right>
                </Section>
                <Section heading="The Team">
                    <BioCards cards={[
                        {
                            name: "Griffin Ferguson",
                            title: "Board Member & President",
                            img: "/about/griffin.jpg",
                            bio: "Griffin is a junior at Stratford High School. He has been working with Let's Code since 2022, and served as President for the 2023 camp. Additionally, he served as co-founder and Vice President of STEM Camp (now STEMpark). In addition to his leadership position, Griffin takes care of the legal and IT duties related to MAST. Outside of MAST, he is the vice president of Stratford's Computer Science club, runs a coding club at a local community center, participates in speech and debate, and is the lighting director for the Stratford Playhouse. While his interest in computer science involves \"a bit of everything,\" his primary focus is on system administration and full-stack web development."
                        }, {
                            name: "Devon Schwartz",
                            title: "Board Member, MAST; Co-founder, Let's Code",
                            img: "/about/devon.jpg",
                            bio: "Devon Schwartz was committed to advancing computer science education while he was a student at Stratford high school. This is what led him to be a co founder of Lets Code Spring Branch in his Junior year of high school. He also served as director of the Family Point Coding Club. He is proud to see all of these programs continue after he graduated high school. Right now, Devon is a student at the University of Texas studying computer science."
                        }
                    ]} />
                </Section>
            </main>
        </>
    )
}