import React from "react";

export default function Section({heading, children}: {heading: string, children: React.ReactNode}) {
    return (
        <section id={heading.toLowerCase().replace(/\s/g, "-")}>
            <h3>{heading}</h3>
            {children}
        </section>
    )
}