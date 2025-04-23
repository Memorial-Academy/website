import "@/src/styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <img className="footer-logo" src="/logo.svg" alt="MAST seal" />
                <div className="footer-main">
                    <p className="footer-title"><a href="/"><b>Memorial Academy of Science and Technology</b></a></p>
                    <p><a href="/about">About Us</a></p>
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
                    <p><a href="/letscode">Let's Code</a></p>
                    <p><a href="/stempark">STEMpark</a></p>
                </div>
                <div>
                    <p><a href="/volunteer"><b>Volunteer</b></a></p>
                    <p><a href="/volunteer/letscode">Volunteer at Let's Code</a></p>
                    <p><a href="/volunteer/stempark">Volunteer at STEMpark</a></p>
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