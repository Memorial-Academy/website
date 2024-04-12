import { Metadata } from 'next';
import Header from "../../components/header";
import Card from '../../components/card';
import Enroll from '../../components/enroll';
import Section from '../../components/section';

export const metadata: Metadata = {
    title: "STEMpark | Memorial Academy of Science and Technology",
    description: "STEM-centered demonstrations and activities, hosted live in a park"
}

const EnrollButton = <Enroll text="Enroll!" link="" />

import Banner from "../../components/banner";

export default function Page() {
    return (
        <>
            <Banner message='Registration opens April 17! Return then for more information.' link='' />
            <Header
                title="STEMpark"
                tagline="STEM-centered demonstrations and activities for grades two through eight, hosted live in a park"
                background="var(--stem-venture-gradient)"
                font="Architects Daughter"
            />
            <main>
                <Card.Left image="/stempark.svg || STEMpark logo" header="Details">
                    <ul>
                        <li><b>Dates:</b> June 24 - 27, 11:30a.m - 2:30p.m</li>
                        <li><b>Location:</b> Bendwood Park (12700 Kimberley Ln, Houston, TX 77024)</li>
                        <li><b>Grades:</b> 2 - 8</li>
                        <li><b>Cost:</b> Free</li>
                        <li>Parents and unenrolled students are welcome to watch demonstrations!</li>
                    </ul>
                </Card.Left>
                {/* {EnrollButton} */}
                <Section heading='New for 2024!'>
                    <Card.Norm header='Learn STEM the fun way'>
                        <p>Featuring a combination of live demonstrations by our passionate team, followed by hands-on student-led activities, there's no better way to learn about STEM!</p>
                        <p>Students will learn about engineering, natural science, life sciences, and astronomy in this action-packed four-day program.</p>
                    </Card.Norm>
                    <Card.Norm header='Registration opens April 17'>
                        <p>It takes time to develop exciting new experiences! Come back here on April 17 to learn more about STEMpark's offerings and sign-up!</p>
                    </Card.Norm>
                   <p>Questions? Concerns? Contact <a href="mailto:stempark@memorialacademy.org">stempark@memorialacademy.org</a></p>
                </Section>
            </main>
        </>
    );
}