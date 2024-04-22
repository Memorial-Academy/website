import "@/src/styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <img src="/logo.svg" alt="MAST seal" />
                <div className="footer-main">
                    <p className="footer-title"><a href="/"><b>Memorial Academy of Science and Technology</b></a></p>
                    <p><a href="/about">About Us</a></p>
                    <p><a href="mailto:hello@memorialacademy.org" className="footer-contact-link">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" fill="var(--gray)" strokeWidth="0"/>
                        </svg>
                        <span>: hello@memorialacademy.org</span> 
                    </a></p>
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