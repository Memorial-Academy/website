import { Metadata } from 'next';
import Card from "@/src/components/card";
import Enroll from "@/src/components/enroll";
import Header from "@/src/components/header";
import Section from "@/src/components/section";
import BulletList from '@/src/components/list';

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

const EnrollButton = <Enroll link="https://cloud.memorialacademy.org/apps/forms/s/GgfcofcgXkzqZYBF4cHKnqEp" text="Volunteer at STEMpark" />

export default function Page() {
    return (
        <>
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
                        <li><b>Dates:</b> June 24 - 27, 11:30a.m - 2:30p.m</li>
                        <li><b>Location:</b> Bendwood Park (12700 Kimberley Ln, Houston, TX 77024)</li>
                        <li><b>Limited spots available!</b></li>
                    </ul>
                    </Card.Left>
                    <p>Do you love STEM? Then STEMpark may be the perfect volunteering opportunity for you! As a volunteer, you'll get to help students complete experiements and build fun projects, help them understand new and interesting concepts, and serve as a guide for students as they expand their knowledge, problem-solving ability, and creative skills. Volunteers for STEMpark are expected to have an interest in STEM and have a good problem-solving ability, and should be excited to share their knowledge with the next generation.</p>
                    {/* {EnrollButton} */}
                </Section>
                <Section heading='The Job of a Volunteer'>
                    <p>STEMpark focuses primarily on three areas of STEM: engineering, life sciences, natural sciences, and astronomy. Volunteers will be tasked with supervising students to ensure they stay safe and do not wander off, in addition to assisting in facilitating experiements and demonstrations</p>
                    <p>Volunteers will not be responsible for presenting demonstrations. However, once the students begin working on experiements, volunteers will be assigned to a group to monitor them and offer assistance when necessary. This includes offering advice, distributing supplies, moderating the usage of supplies, and ensuring the safety of students at all times.</p>
                </Section>
                <Section heading="Join today!">
                    {EnrollButton}
                </Section>
            </main>
        </>
    )
}