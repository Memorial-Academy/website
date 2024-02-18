import "../styles/enroll-banner.css";

export default function EnrollBanner({message}: {message: string}) {
    return (
        <div className="enroll-banner">
            {message}
        </div>
    )
}