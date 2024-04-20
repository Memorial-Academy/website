import "@/src/styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <img src="/logo.svg" alt="MAST seal" />
                <div>
                    <p className="footer-title"><a href="/"><b>Memorial Academy of Science and Technology</b></a></p>
                    <p><a href="mailto:hello@memorialacademy.org">hello@memorialacademy.org</a></p>
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
            <p className="footer-copyright">Memorial Academy of Science and Technology &copy; 2024</p>
        </footer>
    )
}