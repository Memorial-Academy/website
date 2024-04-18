import { Metadata } from 'next';
import Header from "../../components/header";
import Card from '../../components/card';
import Enroll from '../../components/enroll';
import Section from '../../components/section';

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

const EnrollButton = <Enroll text="Enroll!" link="" />

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
                        <li><b>Dates:</b> June 24 - 27, 11:30a.m - 2:30p.m</li>
                        <li><b>Location:</b> Bendwood Park (12700 Kimberley Ln, Houston, TX 77024)</li>
                        <li><b>Grades:</b> 2 - 8</li>
                        <li><b>Cost:</b> Free</li>
                        <li>Parents and unenrolled students are welcome to watch demonstrations!</li>
                        <li><b>Limited spots available!</b></li>
                    </ul>
                </Card.Left>
                {EnrollButton}
                <Section heading='Day-by-Day'>
                    <Card.Norm header='Day 1: Engineering'>
                        <p>Engineering Day will begin with a demonstration over a variety of topics important to engineering, such as gravity, structural forces, </p>
                    </Card.Norm>
                    <Card.Norm header='Day 2: Life Sciences'>
                        
                    </Card.Norm>
                    <Card.Norm header='Day 3: Natural Sciences'>

                    </Card.Norm>
                    <Card.Norm header="Day 4: Astronomy">

                    </Card.Norm>
                </Section>
            </main>
        </>
    );
}