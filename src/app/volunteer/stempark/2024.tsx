import { Metadata } from 'next';
import Card from "@/src/components/card";
import Enroll from "@/src/components/enroll";
import Header from "@/src/components/header";
import Section from "@/src/components/section";
import BulletList from '@/src/components/list';
import Banner from '@/src/components/banner';

export const metadata: Metadata = {
    title: "Volunteer at STEMpark | Memorial Academy of Science and Technology",
    description: "Volunteer with MAST and grow your skills while helping other students grow their's!",
    openGraph: {
        title: "Volunteer at STEMpark | Memorial Academy of Science and Technology",
        description: "Volunteer with MAST and grow your skills while helping other students grow their's!",
        url: "https://www.memorialacademy.org/volunteer/stempark",
        images: {
            url: "https://www.memorialacademy.org/stempark.svg",
            width: 512,
            height: 512,
            alt: "STEMpark logo"
        },
    }
}

const EnrollButton = <Enroll link="https://cloud.memorialacademy.org/apps/forms/s/rYBBCE7kFbNtet56rJgAeweA" text="Volunteer at STEMpark" />

export default function Page() {
    return (
        <>
            {/* <Banner message='Please be aware dates for STEMpark have changed due to permitting issues!' link="" /> */}
            <Header
                title="Volunteer at STEMpark"
                tagline="Help the next generation experience STEM"
                background="var(--sea-blue-gradient)"
                font=""
            />
            <main>
                <Section heading="Volunteer for STEMpark!">
                    <Card.Left image='/stempark.svg' header="Details">
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
                        <li><b>Limited spots available!</b></li>
                    </ul>
                    </Card.Left>
                    <p>Do you love STEM? Then STEMpark may be the perfect volunteering opportunity for you! As a volunteer, you'll get to help students complete experiements and build fun projects, help them understand new and interesting concepts, and serve as a guide for students as they expand their knowledge, problem-solving ability, and creative skills. Volunteers for STEMpark are expected to have an interest in STEM and have a good problem-solving ability, and should be excited to share their knowledge with the next generation.</p>
                </Section>
                <Section heading='The Job of a Volunteer'>
                    <p>STEMpark focuses primarily on three areas of STEM: engineering, life sciences, natural sciences, and astronomy. Volunteers will be tasked with supervising students to ensure they stay safe and do not wander off, in addition to assisting in facilitating experiements and demonstrations</p>
                    <p>Volunteers will not be responsible for presenting demonstrations. However, once the students begin working on experiements, volunteers will be assigned to a group to monitor them and offer assistance when necessary. This includes offering advice, distributing supplies, moderating the usage of supplies, and ensuring the safety of students at all times.</p>
                </Section>
                <Section heading='Activities'>
                    <Card.Norm header='Day 1: Engineering'>
                        <p>Engineering Day will kick off the camp with demonstrations over a variety of topics important to engineering, such as gravity, structural forces, and aerodynamics. Students will then participate in egg drop challenges, paper-plane competitions, and several other activities.</p>
                    </Card.Norm>
                    <Card.Norm header='Day 2: Natural Sciences'>
                        <p>Day Three is all about cool at-home science experiements. Students will get to participate in some incredible chemical reactions, such as Elephant's Toothpaste and Coke & Mento fountains! Students will also get to play with Oobleck and build solar ovens, in addition to seeing the water cycle unfold in real-time.</p>
                    </Card.Norm>
                    <Card.Norm header='Day 3: Life Sciences'>
                        <p>A combination of biology, ecosystems, anatomy, and medicine! Students will learn about the anatomy of different organisms and the traits that help them survive in their environment, before creating life-sized diagrams of the human body. Finally, they'll learn about first-aid and how diseases spread through the world.</p>
                    </Card.Norm>
                    <Card.Norm header="Day 4: Astronomy">
                        <p>Look to the sky! After arriving at the park in the late evening, students will get to learn about the phases of the Moon and design their own spacecraft/rockets using criteria from real-world missions. They'll also get to witness the true scale of our universe by participating in a to-scale demonstration of the Universe's scale that's both out-of-this-world and out-of-this-park! Finally, to end camp, students will get to observe the sun, stars, and potentially some galaxies and nebulae through a telescope and record their observations.</p>
                        <p><b>Note: </b> to facilitate the best star-gazing experience, this day of STEMpark begins at 6:00p.m and ends at 9:00p.m, unlike the other days. Please plan accordingly.</p>
                    </Card.Norm>
                </Section>
                <Section heading="Join today!">
                    <p className="closed-signup">
                        <b>Sign-ups for STEMpark volunteering are now closed. We apologize for the inconvenience!</b>&nbsp;
                        If you are signed up to volunteer at STEMpark, we will be in contact approximately one week before the camp.
                        <br/>
                        Still want to volunteer? Check out our <a href="/volunteer">other opportunities</a>, and be on the look out for news relating to STEMpark 2025!
                    </p>
                </Section>
            </main>
        </>
    )
}