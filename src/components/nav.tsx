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
                    <a href="/volunteer">Volunteer</a>
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