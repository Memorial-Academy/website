import "../styles/enroll.css";
import EnrollClientComponent from "./enroll_button";

export function BigButton({link, text}: {link: string, text: string}) {
    return (
        <div className="enroll-button-wrapper">
            <div className="enroll-button-container">
                <a 
                    href={link}
                    target="_parent"
                    className="enroll-button"
            >{text}</a>
            </div>
        </div>
    )
}

type EnrollButtonProps = {
    programID: string,
    signupType: string,
    text: string
}

export default async function Enroll(props: EnrollButtonProps) {
    const programName = await fetch(`https://api.memorialacademy.org/app/program/${props.programID}`)
        .then((res) => {
            return res.json()
        }).then((json) => {
            return json.name;
        })

    return (
        <div className="enroll-button-wrapper">
            <div className="enroll-button-container">
                <EnrollClientComponent {...props} programName={programName} />
            </div>
        </div>
    )
}

