"use client";
import "../styles/nav.css";
import React, { Dispatch, SetStateAction, useContext, useState, createContext } from "react";
import Link from "next/link";

const MobileNavState = createContext<Dispatch<SetStateAction<boolean>> | undefined>(undefined);

export default function Nav() {
    const [mobileNavActive, setMobileNavActive] = useState(false);

    return (
        <>
            <nav>
                <a id="nav-left" href="/">
                    <img src="/seal.svg" alt="MAST seal"></img>
                    <h1>Memorial Academy of<br/>Science and Technology</h1>
                </a>
                <div id="nav-right" onClick={() => setMobileNavActive(false)} style={{right: (mobileNavActive ? "0" : "-110%")}}>
                    <p id="nav-hamburger-close" onClick={() => setMobileNavActive(false)}><b>X</b> Close</p>
                    <MobileNavState.Provider value={setMobileNavActive}>
                        <NavLink
                            link="/"
                            text="Home"
                            last
                            programLink
                        />
                        <NavLink
                            link="/letscode"
                            text="Let's Code"
                            programLink
                        />
                        <NavLink
                            link="/stempark"
                            text="STEMpark"
                            programLink
                        />
                        <NavLink
                            link="/volunteer"
                            text="Volunteer"
                        />
                        {/* <NavSubsection
                            parent={["Volunteer", "/volunteer"]}
                            links={[
                                ["Let's Code", "/volunteer/letscode"],
                                ["STEMpark", "/volunteer/stempark"],
                            ]}
                        /> */}
                        <NavLink
                            link="/about"
                            text="About"
                        />
                        <NavLink
                            link="/donate"
                            text="Donate"
                            last
                        />
                    </MobileNavState.Provider>
                </div>
                <div id="nav-hamburger-icon" onClick={() => setMobileNavActive(true)} >
                    <svg viewBox="0 0 6 6">
                        <path d="M0 1 l6 0 M0 3 l6 0 M0 5 l6 0" stroke="var(--text-black)" strokeWidth="1" />
                    </svg>
                </div>
            </nav>
        </>
    )
}

type NavLinkProps = {
    link: string,
    text: string,
    last?: boolean,
    programLink?: boolean,
}

function NavLink ({link, text, last, programLink}: NavLinkProps) {
    const setMobileNavActive = useContext(MobileNavState);
    return <>
        <Link 
            href={link}
            onClick={() => {
                if (setMobileNavActive) setMobileNavActive(false);
            }}
            className={programLink ? "program-link" : ""}
        >{text}</Link>
        {!last && <span>|</span>}
    </>
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