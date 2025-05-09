import { Metadata } from 'next';
import Header from "../../components/header";
import Card from '../../components/card';
import Enroll from '../../components/enroll';
import Section from '../../components/section';
import ImageSlideshow from '@/src/components/image_slideshow';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "STEMpark | Memorial Academy of Science and Technology",
    description: "STEM-centered demonstrations and activities, hosted live in a park, for grades two through eight. Parents encouraged to attend!",
    openGraph: {
        title: "STEMpark | Memorial Academy of Science and Technology",
        description: "STEM-centered demonstrations and activities, hosted live in a park, for grades two through eight. Parents encouraged to attend!",
        url: "https://www.memorialacademy.org/stempark",
        images: {
            url: "https://www.memorialacademy.org/stempark.svg",
            width: 512,
            height: 512,
            alt: "STEMpark logo"
        },
    }
}

const EnrollButton = <Enroll text="Enroll today!" link="https://my.memorialacademy.org/programs/enroll/40e41e46d3116e536ed595b1" />

export default function Page() {
    return (
        <>
            <Header
                title="STEMpark"
                tagline="STEM-centered demonstrations and activities for grades two through eight, hosted live in a park"
                background="var(--stem-venture-gradient)"
                font="Architects Daughter"
            />
            <main>
                <Card.Left image="/stempark.svg || STEMpark logo" header="Details">
                    <ul>
                        <li><b>Dates:</b> July 7 - 10</li>
                        <li>
                            <b>Times:</b>
                            <ul>
                                <li>July 7 - 9: 11:30a.m - 2:30p.m</li>
                                <li>July 10: 6:00p.m - 9:00p.m</li>
                            </ul>
                        </li>
                        <li>
                            <b>Location:</b> Bendwood Elementary Playground (12750 Kimberley Ln, Houston, TX 77024)
                            <br/>
                            (next to Bendwood Park)
                        </li>
                        <li><b>Cost:</b> Free</li>
                        <li>Parents and unenrolled students are welcome to watch demonstrations!</li>
                    </ul>
                </Card.Left>
                <Section heading="Explore STEM the fun way!">
                    <p>The best way to learn about STEM is in the real world. STEMpark uses fun hands-on experiements to introduce kids to the different STEM concepts that make up our daily lives, all while getting them out of the classroom and into the outdoors. This week of fun, action-packed experiments and demonstrations is designed specifically to let students gain an understanding of complex topics by building, breaking, and having that "whoa" moment!</p>
                    <p>Parents are welcome to attend to watch the demonstrations.</p>
                    {EnrollButton}
                </Section>
                <Section heading='Day-by-Day'>
                    <Card.Half 
                        left={
                            <>
                                <h4>Day 1: Engineering</h4>
                                <p>Engineering Day will kick off the camp with demonstrations over a variety of topics important to engineering, such as gravity, structural forces, and aerodynamics. Students will then participate in egg drop challenges, paper-plane competitions, and several other activities.</p>
                            </>
                        }
                        right={
                            <ImageSlideshow images={[
                                { src: "/stempark_img/eng1.jpg" },
                                { src: "/stempark_img/eng2.jpg" },
                                { src: "/stempark_img/eng3.jpg" }
                            ]} />
                        }
                    />
                    <Card.Half
                        left={
                            <ImageSlideshow images={[
                                { src: "/stempark_img/sci1.jpg" },
                                { src: "/stempark_img/sci2.jpg" },
                                { src: "/stempark_img/sci3.jpg" }
                            ]} />
                        }
                        right={
                            <>
                                <h4>Day 2: Natural Sciences</h4>
                                <p>Day Three is all about cool at-home science experiements. Students will get to participate in some incredible chemical reactions, such as Elephant's Toothpaste and Coke & Mento fountains! Students will also get to play with Oobleck and build solar ovens, in addition to seeing the water cycle unfold in real-time.</p>
                            </>
                        }
                    />
                    <Card.Half 
                        left={
                            <>
                                <h4>Day 3: Life Sciences</h4>
                                <p>A combination of biology, ecosystems, anatomy, and medicine! Students will learn about the anatomy of different organisms and the traits that help them survive in their environment, before creating life-sized diagrams of the human body. Finally, they'll learn about first-aid and how diseases spread through the world.</p>
                            </>
                        }
                        right={
                            <ImageSlideshow images={[
                                { src: "/stempark_img/health1.jpg" },
                                { src: "/stempark_img/health2.jpg" },
                                { src: "/stempark_img/health3.jpg" },
                                { src: "/stempark_img/health4.jpg" }
                            ]} />
                        }
                    />
                    <Card.Half
                        left={
                            <ImageSlideshow images={[
                                { src: "/stempark_img/space1.jpg" },
                                { src: "/stempark_img/space2.jpg" },
                                { src: "/stempark_img/space3.GIF" }
                            ]} />
                        }
                        right={
                            <>
                                <h4>Day 4: Astronomy</h4>
                                <p>Look to the sky! After arriving at the park in the late evening, students will get to learn about the phases of the Moon and design their own spacecraft/rockets using criteria from real-world missions. They'll also get to witness the true scale of our universe by participating in a to-scale demonstration of the Universe's scale that's both out-of-this-world and out-of-this-park! Finally, to end camp, students will get to observe the sun, stars, and potentially some galaxies and nebulae through a telescope and record their observations.</p>
                                <p><b>Note: </b> to facilitate the best star-gazing experience, this day of STEMpark begins at 6:00p.m and ends at 9:00p.m, unlike the other days. Please plan accordingly.</p>
                            </>
                        }
                    />
                </Section>
                <Section heading="Sign up today!">
                    {EnrollButton}
                    <p>We're managing signups with <a href="https://my.memorialacademy.org">MyMAST</a> this year. <Link href="/about/mymast">Learn more.</Link></p>
                    <p>Questions? Concerns? Contact <a href="mailto:stempark@memorialacademy.org">stempark@memorialacademy.org</a></p>
                    <p>Note: STEMpark is not endorsed nor sponsored by Spring Branch Independent School District or Bendwood Elementary School.</p>
                </Section>
            </main>
        </>
    );
}