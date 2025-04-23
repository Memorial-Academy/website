import Link from "next/link";
import "../styles/banner.css";

export default function Banner({message, link}: {message: string, link?: string}) {
    return (
        <div className="banner">
            {link && link != "" ? <Link href={link}>{message}</Link> : <span>{message}</span>}
        </div>
    )
}