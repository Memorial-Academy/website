import "../styles/nav.css";

export default function Nav() {
    return (
        <nav>
            <a id="nav-left" href="/">
                <img src="/seal.svg" alt="MAST seal"></img>
                <h1>Memorial Academy of<br></br>Science and Technology</h1>
            </a>
            <div id="nav-right">
                <a href="/letscode" className="program-link">Let's Code</a>
                <span>|</span>
                <a href="/stempark" className="program-link">STEMpark</a>
                <span>|</span>
                {/* <a href="/volunteer">Volunteer</a>
                <span>|</span> */}
                <a href="/donate">Donate</a>
                <span>|</span>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}