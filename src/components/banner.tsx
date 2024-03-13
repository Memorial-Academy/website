import "../styles/banner.css";

export default function Banner({message, link}: {message: string, link: string}) {
    return (
        <div className="banner">
            {link != "" ? <a href={link}>{message}</a> : <span>{message}</span>}
        </div>
    )
}