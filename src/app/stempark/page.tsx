import { Metadata } from 'next';
import Header from "../../components/header";
import Card from '../../components/card';

export const metadata: Metadata = {
    title: "STEMpark | Memorial Academy of Science and Technology",
    description: "STEM-centered demonstrations and activities, hosted live in a park"
}

export default function Page() {
    return (
        <>
            <Header
                title="STEMpark"
                tagline="STEM-centered demonstrations and activities for grades three through eight, hosted live in a park"
                background="var(--stem-venture-gradient)"
                font="Architects Daughter"
            />
            <main>
                <Card.Left image="/stempark.svg || STEMpark logo" header="Details">
                    <ul>
                        <li><b>Dates:</b> June 24 - 27, 11:30a.m - 2:30p.m</li>
                        <li><b>Location:</b> Bendwood Park (12700 Kimberley Ln, Houston, TX 77024)</li>
                        <li><b>Grades:</b> 3 - 8</li>
                        <li><b>Cost:</b> Free</li>
                        <li>Parents and unenrolled students are welcome to watch demonstrations!</li>
                    </ul>
                </Card.Left>
            </main>
        </>
    );
}