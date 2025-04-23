import "@/src/styles/footer.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <img className="footer-logo" src="/logo.svg" alt="MAST seal" />
                <div className="footer-main">
                    <p className="footer-title">
                        <Link href="/"><b>Memorial Academy of Science and Technology</b></Link>
                    </p>
                    <p><Link href="/about">About Us</Link></p>
                    <SocialLink 
                        link="mailto:hello@memorialacademy.org"
                        service="Email"
                        label="hello@memorialacademy.org"
                        image="/glyphs/email.svg"
                    />
                    <SocialLink
                        link="https://www.instagram.com/memorial__academy/"
                        service="Instagram"
                        label="@memorial__academy"
                        image="/glyphs/instagram.svg"
                    />
                    <SocialLink
                        link="https://github.com/Memorial-Academy/"
                        service="GitHub"
                        label="Memorial-Academy"
                        image="/glyphs/github.svg"
                    />
                </div>
                <div>
                    <p><b>Programs</b></p>
                    <p><Link href="/letscode">Let's Code</Link></p>
                    <p><Link href="/stempark">STEMpark</Link></p>
                </div>
                <div>
                    <p><Link href="/volunteer"><b>Volunteer</b></Link></p>
                    <p><Link href="/volunteer/letscode">Volunteer at Let's Code</Link></p>
                    <p><Link href="/volunteer/stempark">Volunteer at STEMpark</Link></p>
                </div>
            </div>
            <p className="footer-copyright">Memorial Academy of Science and Technology &copy; 2025</p>
        </footer>
    )
}

function SocialLink({link, service, label, image}: {link: string, service: string, label: string, image: string}) {
    return (
        <p title={service} >
            <a href={link} className="footer-contact-link" target="_blank">
                <img src={image} alt={service} />
                <span>{label}</span>
            </a>
        </p>
    )
}