import Card from "@/src/components/card";
import Header from "@/src/components/header";
import Section from "@/src/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Memorial Academy of Science and Technology",
    description: "The privacy policy for apps and digital services associated with the Memorial Academy of Science and Technology."
}

export default function Page() {
    return (
        <>
            <Header
                title="Privacy Policy"
                tagline="Learn how we protect your data."
            />
            <main>
                <Section heading="Privacy shouldn't be complicated">
                    <p>
                        Before we get to the long explanations, let's boil this privacy policy down to it's simplest points. Your data is <i>your</i> data, and at MAST we take numerous efforts to ensure your data remains and protected.
                        By nature of providing the services we provide, we're required to collect information from you, such as your name, email address, and phone number. The goal of this page is to, in simple and brief terms, explain how we manage that data.
                    </p>
                    <p><b>The full version of the privacy policy (that you actually agree to) can be found at the bottom of this page.</b></p>
                    <Card.Norm header="Selling, sharing and distributing data">
                        <p>
                            <b>We never sell or distribute your data to third-parties without your consent.</b> The data you provide when creating a MyMAST account and during the signup process for a specific program is stored on servers leased by MAST from respected cloud providers, and is only processed by MAST systems. Both our software systems and servers are protected with up-to-date and robust security measures to ensure no unauthorized access or data leaks to the best of our abilities.
                            Volunteers, Program Directors, and other MAST team members who may view or access your data as part of your participation in a program are requirement by their agreements to not share any communications with or information about program participants externally.
                        </p>
                        <p>
                            Sometimes, when participating in a program such as Let's Code, students and volunteers may be expected to create an account on a third-party website, however we will never create accounts on your behalf or mandate specific data be shared during the account creation process in these cases. 
                            We also frequently check these privacy policies to ensure they align with our standards and morals.
                        </p>
                    </Card.Norm>
                    <Card.Norm header="Analytics and Cookies">
                        <p>We may use anonymous analytic services, such as <a href="https://plausible.io/" rel="noopener noreferrer" target="_blank">Plausible Analytics</a> to track traffic and views on our websites. Services like this are vetted by us, and do not sell or share your information. The data is fully anonymous and is fully compliant with the strictest international privacy laws.</p>
                        <p>When using MAST services, we may store cookies on your device to provide functionality. These cookies are not used for marketing, tracking, or advertising purposes and only work within MAST's websites. These cookies provide functionality such as ensuring you remain logged in to MyMAST.</p>
                    </Card.Norm>
                    <Card.Norm header="Data deletion">
                        <p>
                            We're working on implementing self-service account deletion into MyMAST. In the mean time, you can email <a href="mailto:hello@memorialacademy.org?subject=MyMAST Account Deletion">hello@memorialacademy.org</a> to delete your MyMAST account. Deleting your account will fully remove all data associated with you from our systems.
                            <br/>
                            Please note that our systems often feature automatic backup systems that take frequent snapshots of our systems to ensure critical data is not unintentionally lost. As a result, it may take several weeks (typically no more than two to four weeks) for these automatic backups to expire before the deleted data is permanently and irreversibly deleted.
                        </p>
                    </Card.Norm>
                </Section>
                <Section heading="The Long Version">
                    <p><b>Please note that this is a simplified version of our privacy policy, and is merely a summary of what you agree to.</b> To view the full version of the privacy policy, <a href="https://cloud.memorialacademy.org/s/xbFwF3bJ2psA9jt">click here</a>.</p>
                </Section>
            </main>
        </>
    )
}