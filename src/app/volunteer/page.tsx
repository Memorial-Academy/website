import Card from "@/src/components/card";
import Enroll from "@/src/components/enroll";
import Header from "@/src/components/header";
import Section from "@/src/components/section";

export default function Page() {
    return (
        <>
            <Header
                title="Volunteer"
                tagline="Volunteer at MAST and make an impact!"
                background="var(--sea-blue-gradient)"
                font=""
            />
            <main>
                <Section heading="Join our team!">
                    <p>MAST relies on passionate, experienced volunteers to assist in running its programs. Volunteering for MAST is an incredible experience; while you develop leadership, social, and teaching skills, you're helping and empowering students to learn new skills and unlock potential they may have previously never known they had.</p>
                </Section>
                <Section heading="FAQ's">
                    <h4>What roles can I volunteer for?</h4>
                    <Card.Half
                        left={
                            <>
                                <h5>Instructors</h5>
                                <p>Based on the experience level of a volunteer, certain volunteers are chosen to be instructors. Instructors lead their respective classes and are responsible for overseeing the teaching of lessons and running demonstrations. Instructors are expected to be highly-experienced in the subject(s) they teach, and will serve as the primary resource/contact for that specific class.</p>
                            </>
                        }
                        right={
                            <>
                                <h5>Counselor</h5>
                                <p>Counselors are responsible for helping students solve problems, provide prompts and inspiration to help them be creative, and most importantly: create a successful and joyful learning experience.</p>
                            </>
                        }
                    />
                    <Card.Norm header="What are the requirements to be a volunteer?">
                        <ul>
                            <li>High school student (entering grades 10-12 or graduating)</li>
                            <li>Experience and passion in the tools/subjects you wish to teach</li>
                            <li>Prior experience working with children/volunteering is preferred</li>
                            <li>Ability to work well in a team and be patient</li>
                        </ul>
                    </Card.Norm>
                    <Card.Norm header="Why should I volunteer with MAST?">
                        <p>Volunteering with MAST allows you to grow your skills as a leader, team member, and educator. Additionally, you'll be impacting students in a meaningful way by helping them access opportunities and unlock skills they otherwise may not be able to access.</p>
                        <p>Please note that volunteering hours such as NHS are available to all who sign up. Volunteers may claim hours for the full duration during which they volunteer (in some cases upwards of 90 hours).</p>
                    </Card.Norm>
                    <p>Still have questions? Contact <a href="mailto:volunteer@memorialacademy.org">volunteer@memorialacademy.org</a></p>
                </Section>
                <Section heading="Join today!">
                        <Enroll link="" text="Volunteer for Let's Code Introductory Classes" />
                        <Enroll link="" text="Volunteer for Let's Code Advanced Classes" />
                        <Enroll link="" text="Volunteer for STEMpark" />
                </Section>
            </main>
        </>
    )
}