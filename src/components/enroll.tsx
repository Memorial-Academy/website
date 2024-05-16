import "../styles/enroll.css";

export default function Enroll({link, text}: {link: string, text: string}) {
    return (
        <div className="enroll-button-wrapper">
            <div className="enroll-button-container">
                <a href={link} target={link.startsWith("https://") ? "_blank" : "_parent"} className="enroll-button">{text}</a>
            </div>
        </div>
    )
}