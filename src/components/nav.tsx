"use client";
import "../styles/nav.css";
import React from "react";

export default function Nav() {
    function openHambugerMenu() {
        document.getElementById("nav-right")!.style.right = "0";
    }

    function closeHamburgerMenu() {
        document.getElementById("nav-right")!.style.right = "-100%";
    }

    return (
        <>
            <nav>
                <a id="nav-left" href="/">
                    <img src="/seal.svg" alt="MAST seal"></img>
                    <h1>Memorial Academy of<br/>Science and Technology</h1>
                </a>
                <div id="nav-right">
                    <p id="nav-hamburger-close" onClick={closeHamburgerMenu}><b>X</b> Close</p>
                    <a href="/" className="program-link">Home</a>
                    <a href="/letscode" className="program-link">Let's Code</a>
                    <span>|</span>
                    <a href="/stempark" className="program-link">STEMpark</a>
                    {/* <span>|</span>
                    <a href="/donate">Donate</a> */}
                    <span>|</span>
                    <NavSubsection
                        parent={["Volunteer", "/volunteer"]}
                        links={[
                            ["Let's Code", "/volunteer/letscode"],
                            ["STEMpark", "/volunteer/stempark"],
                        ]}
                    />
                    <span>|</span>
                    <a href="/about">About</a>
                </div>
                <div id="nav-hamburger-icon" onClick={openHambugerMenu} >
                    <svg viewBox="0 0 6 6">
                        <path d="M0 1 l6 0 M0 3 l6 0 M0 5 l6 0" stroke="var(--text-black)" strokeWidth="1" />
                    </svg>
                </div>
            </nav>
        </>
    )
}

function NavSubsection({parent, links}: {parent: Array<string>, links: Array<Array<string>>}) {
    var linkList = links.map((link) => {
        return <a key={link[0]} href={link[1]}>{link[0]}</a>
    })

    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };
    
    return (
        <>
            <div className="nav-subsection-wrapper" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <a href={parent[1]}>{parent[0]} &#11206;</a>
                {isHovering && (
                <div className="nav-subsection">
                    {linkList}
                </div>)}
            </div>
            <div className="nav-hamburger-subsection-wrapper">
                <a href={parent[1]}><b>{parent[0]}</b></a>
                <div className="nav-hamburger-subsection">
                    {linkList}
                </div>
            </div>
        </>
    )
}