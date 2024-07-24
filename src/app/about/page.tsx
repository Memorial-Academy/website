import { Metadata } from 'next';
import Card from "@/src/components/card";
import Header from "@/src/components/header";
import Section from "@/src/components/section";
import BioCards from '@/src/components/bio-card';

export const metadata: Metadata = {
    title: "About | Memorial Academy of Science and Technology",
    description: "Learn more about the mission and history of the Memorial Academy of Science and Technology",
    openGraph: {
        title: "About | Memorial Academy of Science and Technology",
        description: "Learn more about the mission and history of the Memorial Academy of Science and Technology",
        url: "https://www.memorialacademy.org/about",
        images: {
            url: "https://www.memorialacademy.org/seal.svg",
            width: 512,
            height: 512,
            alt: "MAST seal"
        },
    }
}

export default function Page() {
    return (
        <>
            <Header
                title="About Us"
                tagline=""
                background="var(--sea-blue-gradient)"
                font=""
            />
            <main>
                <Section heading='Our Mission'>
                    <p>Every student has a different background; the job of a functioning education system is to ensure every student has access to high quality educational opportunities that teach them new skills and prepare them for life after school. To often, our education systems are unable to provide students with these high-quality opportunities. MAST aims to be part of the fix to this problem!</p>
                    <p>The Memorial Academy of Science and Technology was founded to provide free/low-cost summer programs to elementary/middle school students of all backgrounds, with a focus on computer science and STEM programs. It is our belief that in the modern world, these two crucial sectors that captivate the attention of millions of students are inadequately taught in schools, resulting in student's views on these exciting fields being tainted by boring homework assignments and poorly structured curriculums.</p>
                    <p>Our programs are created by experienced high school & university students, dedicated to changing the world by sharing their knowledge and passion with the next generation. We attempt to work side-by-side with school districts, schools, and teachers to compliment their programs and give students every opportunity for success and learning.</p>
                </Section>
                <Section heading='Our Programs'>
                    <p>We believe the best way to learn is by experience, and as a result our programs utilize a "guided-experimentation" classroom model, drawing inspiration from several research papers and discussions with experienced educators. This model allows students to be introduced to a subject via an in-depth, demonstration filled, interactive lesson. Following this, students work independently or in a small group to complete a student-led project. Students complete these projects with only a generic prompt; the manner in which they complete the project is up to their knowledge, problem solving, and creativity. MAST team members take on the role of guiding students through these projects as needed, stepping in only to help students through tough problems and help them expand on their skills.</p>
                </Section>
                <Section heading="Our History">
                    <Card.Left image='/about/lets_code_old.png' header='2021'>
                        <p>
                           In the spring of 2021, four students from Stratford High School in Houston, Texas, set out to create a coding summer camp dedicated to allowing students from low-income backgrounds to gain an introduction to computer science. This summer camp became known as Let's Code, and launches as a virtual summer camp with just two classes.
                        </p>
                    </Card.Left>
                    <Card.Norm header='2022'>
                        <p>After the success of the first year, Let's Code becomes affiliated with the local school district, allowing the camp to switch from a virtual summer camp to an in-person camp with three introductory classes. The summer camp in 2022 sees approximately 100 students and 20 volunteers attend over the course of two weeks.</p>
                    </Card.Norm>
                    <Card.Norm header='2023'>
                        <>
                            <p>
                                Two sophomores are bought on to Let's Code's executive board, replacing three graduated students. Let's Code continues running its three introductory classes and sees over 80 students and approximately 15 volunteers.
                            </p>
                            <p>
                                Meanwhile, another sophomore begins preparing plans for a STEM-based summer camp (simply referred to as "STEM Camp"), and enlists the help of one of Let's Code's president.
                            </p>
                            <p>However, in the fall of 2023, budget cuts begin to strike Let's Code's affiliated school district, resulting in a cancellation of all school-affiliated summer camps, including Let's Code and the still-being-planned STEM Camp.</p>
                        </>
                    </Card.Norm>
                    <Card.Right header='2024' image='/seal.svg'>
                        <>
                            <p>
                                Both the Let's Code and STEM Camp teams set big goals for 2024, aiming to add new classes to Let's Code and launch STEM Camp. However 2023's budget cuts replaced these goals with discussions and meetings in an attempt to find a new home for both camps.
                            </p>
                            <p>
                                To the dismay of both the school and the leadership teams, the discussions failed to keep Let's Code and STEM Camp running with their school affiliation, and as a result, the Memorial Academy of Science and Technology (a.k.a "MAST") was formed.
                            </p>
                            <p>
                                MAST combines Let's Code and STEM Camp (now STEMpark) into one organization, being led by several veterans of summer camp leadership, including the original founding team for Let's Code, the current board of Let's Code, and the founding team for STEMpark.
                            </p>
                        </>
                    </Card.Right>
                </Section>
                <Section heading="The Team">
                    <BioCards cards={[
                        {
                            name: "Griffin Ferguson",
                            title: "Board Member & President, MAST; Program Director, Let's Code & STEMpark",
                            img: "/about/griffin.jpg",
                            bio: "Griffin is a senior at Stratford High School. He has been working with Let's Code since 2022, and served as President for the 2023 camp. Additionally, he served as co-founder and Vice President of STEM Camp (now STEMpark). In addition to his leadership position, Griffin takes care of the legal, financial, and IT duties related to MAST. Outside of MAST, he is the president of Stratford's Computer Science club, runs a coding club at a local community center, participates in speech and debate, and is the lighting director for the Stratford Playhouse. While his interest in computer science and STEM involves \"a bit of everything,\" his primary focus is on system administration and full-stack web development."
                        }, {
                            name: "Devon Schwartz",
                            title: "Board Member, MAST; Co-founder, Let's Code",
                            img: "/about/devon.jpg",
                            bio: "Devon Schwartz was committed to advancing computer science education while he was a student at Stratford high school. This is what led him to be a co-founder of Lets Code Spring Branch in his Junior year of high school. He also served as director of the Family Point Coding Club. He is proud to see all of these programs continue after he graduated high school. Right now, Devon is a student at the University of Texas studying computer science."
                        }, {
                            name: "Jasmine Zeng",
                            title: "Board Member, MAST; Co-founder, Let's Code",
                            img: "/about/jasmine.jpg",
                            bio: "Jasmine is an undergraduate business student at Carnegie Mellon University pursuing a Business Administration major, Human Computer Interaction minor, and pre-law path. She is passionate about helping economically disadvantaged students reach their fullest potential."
                        }, {
                            name: "Isabella Xu",
                            title: "Board Member & Vice President, MAST; Program Director, STEMpark",
                            img: "/about/isabella.jpg",
                            bio: "Isabella is a senior at the Texas Academy of Mathematics and Science (TAMS). Since a young age, she has been keenly aware of the large disparity in educational opportunities that exists based on economic status. A firm believer of educational equity, she has volunteered/worked for multiple STEM enrichment programs, the most notable one being Let's Code 2022. This eventually prompted her to found STEM Camp (now STEMpark) where she currently holds the position of president. Outside of MAST, Isabella primarily dedicates her time to her research lab at UNT or competitive coding."
                        }, {
                            name: "Grace Abdelnour",
                            title: "Board Member & Vice President, MAST; Program Director, Let's Code",
                            img: "/about/grace.jpg",
                            bio: "Grace Abdelnour is a senior at Stratford High School. They have been programming for six years and plan to major in computer science in college. They have previously volunteered at Let;s Code and often help at the Family Point Resources coding club. Outside of school, they enjoy working on personal programming projects and spend their free time either reading or playing chess."
                        }, {
                            name: "Neil Aylor",
                            title: "Board Member, MAST; Co-founder, Let's Code",
                            img: "/about/neil.jpg",
                            bio: "Neil Aylor is a former senior at Stratford High School. He is now a junior at Texas A&M majoring in computer science and has been programming for nine years. He is the former president of the Stratford Chess Club and Stratford Computer Science Club."
                        }, {
                            name: "Jean Hoang",
                            title: "Board Member, MAST; Co-founder, Let's Code",
                            img: "/about/jean.jpg",
                            bio: "Jean Hoang is a sophomore at Stanford University, pursuing computer science and artificial intelligence. Jean was one of the co-founders of Let's Code and is excited to see where the program will go in the future. Outside of programming and school, Jean practices Chinese martial arts. She also loves to read, watch K-Dramas and anime, and listen to K-Pop."
                        }
                    ]} />
                </Section>
            </main>
        </>
    )
}