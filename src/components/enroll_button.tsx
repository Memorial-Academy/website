"use client";
import { usePlausible } from "next-plausible";

type EnrollClientProps = {
    programID: string,
    signupType: string,
    text: string,
    programName: string
}

export default function EnrollClientComponent({signupType, programID, text, programName}: EnrollClientProps) {
    const plausible = usePlausible();
    console.log(programName)

    return <>
        <a 
                href={`https://my.memorialacademy.org/programs/${signupType}/${programID}?utm_source=mast_website&utm_campaign=enroll_button`}
                target="_blank"
                className="enroll-button"
                onClick={() => {
                    plausible("EnrollmentClicked", {props: {
                        signupType: signupType,
                        program: programName
                    }});
                }}
        >{text}</a>
    </>
}