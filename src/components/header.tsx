import "../styles/header.css";

export default function Header({title, tagline, background}: {title: string, tagline:string, background:string}) {

    return (
        <header style={{background: background}}>
            <h2>{title}</h2>
            <p>{tagline}</p>
        </header>
    )
}