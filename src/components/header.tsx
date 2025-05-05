import "../styles/header.css";

export default function Header({title, tagline, background, font}: {title: string, tagline?: string, background?: string, font?: string}) {

    return (
        <header style={{background: background || "var(--sea-blue-gradient)"}}>
            <div>
                <h2 style={{fontFamily: (font != "" ? font : "Play")}}>{title}</h2>
                <p>{tagline}</p>
            </div>
        </header>
    )
}