import { Metadata } from 'next';
import Header from "../../components/header";
import Card from '../../components/card';
import Enroll from '../../components/enroll';
import Section from '../../components/section';
import Banner from '@/src/components/banner';

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

const EnrollButton = <Enroll text="Enroll in STEMpark!" link="https://cloud.memorialacademy.org/apps/forms/s/bt7KKCwSammaxo3FyzBX94io" />

export default function Page() {
    return (
        <>
            <Banner message='Please be aware dates for STEMpark have changed due to permitting issues!' link="" />
            <Header
                title="STEMpark"
                tagline="STEM-centered demonstrations and activities for grades two through eight, hosted live in a park"
                background="var(--stem-venture-gradient)"
                font="Architects Daughter"
            />
            <main>
                <Card.Left image="/stempark.svg || STEMpark logo" header="Details">
                    <ul>
                        <li><b>Dates:</b> July 22 - 25</li>
                        <li>
                            <b>Times:</b>
                            <ul>
                                <li>July 22 - 24: 11:30a.m - 2:30p.m</li>
                                <li>July 25: 6:00p.m - 9:00p.m</li>
                            </ul>
                        </li>
                        <li><b>Location:</b> Bendwood Park (12700 Kimberley Ln, Houston, TX 77024)</li>
                        <li><b>Cost:</b> Free</li>
                        <li>Parents and unenrolled students are welcome to watch demonstrations!</li>
                        <li><b>Limited spots available!</b></li>
                    </ul>
                </Card.Left>
                {EnrollButton}
                <Section heading="Explore STEM">
                    <p>The besy way to learn about STEM is in the real world. STEMpark uses fun hands-on experiements to introduce kids to different STEM concepts, all while getting them out of the classroom and into the outdoors.</p>
                    <p>Parents are welcome to attend to watch the demonstrations and help their kids learn.</p>
                </Section>
                <Section heading='Day-by-Day'>
                    <Card.Norm header='Day 1: Engineering'>
                        <p>Engineering Day will begin with a demonstration over a variety of topics important to engineering, such as gravity, structural forces, and aerodynamics. Students will then participate in egg drop challenges, paper-plane competitions, and several other activities.</p>
                    </Card.Norm>
                    <Card.Norm header='Day 2: Life Sciences'>
                        <p>A combination of biology, ecosystem, anatomy, and medicine! Students will explore the different ecosystems and organisms present in the park, and discover the different traits these organisms use to help them survive, and discover the food chains that keep the park diverse. Then, they'll work together to create a life-sized drawing of the human body and it's different organs in a riddle-filled scavenger hunt.</p>
                    </Card.Norm>
                    <Card.Norm header='Day 3: Natural Sciences'>
                        <p>Day Three is all about cool at-home science experiements. Students will get to participate in some incredible chemical reactions, such as Elephant's Toothpaste and Coke & Mento fountains! Students will also get to play with Oobleck and build solar ovens, in addition to learning about the water cycle.</p>
                    </Card.Norm>
                    <Card.Norm header="Day 4: Astronomy">
                        <p>Look to the sky! After arriving at the park in the late evening, students will get to observe the sun, stars, and potentially some galaxies and nebulae through a telescope and record their observations. They'll also get to witness the true scale of our universe by participating in a to-scale demonstration of the Universe's scale that's both out-of-this-world and out-of-this-park!</p>
                        <p><b>Note: </b> to facilitate the best star-gazing experience, this day of STEMpark begins at 6:00p.m and ends at 9:00p.m, unlike the other days. Please plan accordingly.</p>
                    </Card.Norm>
                </Section>
                <Section heading="Sign up today!">
                    {EnrollButton}
                   <p>Questions? Concerns? Contact <a href="mailto:stempark@memorialacademy.org">stempark@memorialacademy.org</a></p>
                </Section>
            </main>
        </>
    );
}