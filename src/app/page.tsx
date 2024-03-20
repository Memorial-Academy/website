import Banner from "../components/banner";
import Header from "../components/header";

export default function Home() {
    return (
        <>
            {/* <Banner message={"Now enrolling 2024 summer camps!"} link="#programs" /> */}
            <Banner message={"Support the future of high-quality summer camps; donate today!"} link="/donate" />
            <Header
                title="Boost your child's learning!"
                tagline="STEM and Computer Science summer programs for grades 5 - 8, designed to guide kids into real-world tools and skills"
                background="linear-gradient(135deg, rgb(7, 0, 143) 0%, rgb(12, 12, 189) 35%, rgba(0,212,255,1) 100%)"
                font=""
            />
            <main>
                <h3>Empowering young minds</h3>
                <p></p>
                <h3 id="programs">Our Programs</h3>
            </main>
        </>
    );
}
