import "../styles/enroll.css";

export default function Enroll({link, text}: {link: string, text: string}) {
    return (
        <div className="enroll-button-wrapper">
            <a href={link} target="_blank" className="enroll-button">{text}</a>
        </div>
    )
}