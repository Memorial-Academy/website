import Card from "@/src/components/card";
import Header from "@/src/components/header";
import Section from "@/src/components/section";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Introducing MyMAST | Memorial Academy of Science and Technology",
    description: "Learn more about how we're using MyMAST to streamline signups for parents and volunteers alike!"
}

export default function Page() {
    return (
        <>
            <Header
                title="Introducing MyMAST"
                tagline="We're revolutionizing the way parents and volunteers signup for programs."
            />
            <main>
                <Section heading="What is MyMAST?">
                    <p>
                        Far too often for many years, we've encountered problems with our signup processes, whether that being web form glitching out, confirmation emails being received late (or not at all), or even all of our emails getting marked as spam.
                        It's far from ideal to have parents and volunteers emailing and calling us asking for information about a program they signed up for, because they have no easy way to access that information; or worse, they simply forget they ever signed up and never attend.
                        For these reasons, we developed MyMAST!
                    </p>
                    <p>
                        MyMAST is a custom platform developed by the Memorial Academy of Science and Technology to manage all of our programs. Simply create an account, and all you have to do to enroll your students or sign-up to volunteer is click the large blue "Enroll" or "Volunteer" button on a program's webpage.
                        MyMAST will automatically send a confirmation email, but should that email fail to be received for any reason, all the necessary information will be displayed on your MyMAST dashboard. Simply log-in to MyMAST at any time to see up-to-date information for all the enrollments for your students, or volunteering commitments as a volunteer. 
                    </p>
                </Section>
                <Section heading="What does this mean?">
                    <p>MyMAST two types of accounts: parent accounts and volunteer accounts.</p>
                    <Card.Norm header="Are you a parent?">
                        <p>
                            When you create a parent account (by selecting "I'm a parent" during account creation), we'll automatically save all the information you enter and automatically apply it to all of your future enrollments.
                            <br/>
                            You can add as many students as you'd like to your MyMAST account. You're required to add at least one student during account creation, but can always manage the students linked to your account (including adding and deleting students) from the "Account" page in MyMAST.
                        </p>
                        <p>
                            To enroll in a program, simply visit that program's webpage (often linked to from this website or a flyer) and click the large "Enroll" button. If you aren't logged in, you'll be directed to the login page to login or create an account; you'll be sent back to the enrollment page once you're logged in.
                            <br/>
                            Then, simply select the students you wish to enroll. Depending on the course, you may have to answer a few questions, such as what course do you want to enroll in, and during what week(s). Then you'll be provided a link to complete the Program Enrollment Agreement and another link to make an optional (but helpful) donation. That's the entire process for enrolling!
                        </p>
                        <p>
                            All enrollments for all your students will be displayed in your <a href="https://my.memorialacademy.org/dashboard">MyMAST dashboard</a>. This will always display up-to-date information for all your enrollments, including schedules, locations, course information (if applicable), and contact information.
                        </p>
                    </Card.Norm>
                    <Card.Norm header="Are you a volunteer?">
                        <p>
                            When you create a volunteer account (by selecting "I'm a volunteer" during account creation), we'll automatically save all the information you enter and automatically apply it to all of your future sign-ups.
                            <br/>
                            To volunteer for a program, visit the program's webpage (typically linked to from this website or a flyer) and click the large "Volunteer" button. You may have to answer a few more questions relating to specific weeks and/or courses you wish to volunteer for, in addition to an optional question allowing you to provide extra information about yourself (like skills, experience, hobbies, etc.).
                        </p>
                        <p>
                            Once you volunteer, the signup will be "pending." As we frequently operate programs with multiple courses, your signup will first be reviewed by a Program Director, who will assign you certain courses/tasks if applicable. Once a Program Director finalizes your signup, it becomes "confirmed." You'll receive an email when you initially sign-up, and when your sign-up becomes confirmed. 
                            <br/>
                            <ins>Note that we do not delete volunteering signups; all "pending" signups will become confirmed. Additionally, you will receive an assignment for every week you signed up for.</ins>
                        </p>
                        <p>
                            All your volunteer commitments, pending and confirmed, will be displayed in your <a href="https://my.memorialacademy.org/dashboard">MyMAST dashboard</a>. This will always display up-to-date information for all your sign-ups, including volunteering hours earned, schedules, locations, course information (if applicable), and contact information.
                        </p>
                    </Card.Norm>
                </Section>
                <Section heading="Why do I have to create an account?">
                    <p>
                        Creating an account allows you to access all the information regarding your enrollments from your MyMAST dashboard. This means you no longer have to rely on emails or a website/flyer that is only intended to provide basic, generic information for a program.
                        <br/>
                        The only extra information you have to provide us is a password, which allows you to securely view this information later on. All the other information you enter during account creation is information we'd ask for regardless of whether you were required to create an account.
                    </p>
                    <Card.Norm header="But I'm worried about my data!">
                        <p>
                            This is a completely understandable concern! We are very digital privacy and security concious developers, and we have implemented numerous measures to ensure your data is safe and protected. For a complete explanation of how we manage your data, check out our <Link href="/legal/privacy">Privacy Policy</Link> (this link takes you to a "simplified," easy-to-read version). 
                        </p>
                        <p>
                            In MyMAST, all data is access-controlled and restricted to only users who need to access that data. Direct access to servers and databases only being accessible over secure connections and with strong authentication credentials. Information such as passwords is irreversibly encrypted before being stored, and all connections to MyMAST are automatically secured/encrypted by your browser (these are all concepts covered in Let's Code!).
                        </p>
                    </Card.Norm>
                </Section>
                <Section heading="Can I sign up another way?">
                    <p>No, we are only accepting sign-ups through MyMAST as it is the primary software being utilized to manage the operations of our programs. There is no longer a "web-form and spreadsheet" system like we have had in previous years.</p>
                </Section>
            </main>
        </>
    )
}