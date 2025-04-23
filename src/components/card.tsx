import Link from "next/link";
import "../styles/card.css";
import React from "react";

type CardParams = {
    children: React.ReactNode, 
    image: string,
    header: string
}

const Card = {
    Left: ({children, image, header}: CardParams) => {
        var imageComponents = image.split(" || ");
        return (
            <div className="card card-left">
                <div className="card-image">
                    <img src={imageComponents[0]} alt={imageComponents[1]} />
                </div>
                <div className="card-border" role="separator"></div>
                <div>
                    <h4>{header}</h4>
                    {children}
                </div>
            </div>
        )
    }, Right: ({children, image, header}: CardParams) => {
        var imageComponents = image.split(" || ");
        return (
            <div className="card card-right">
                <div>
                    <h4>{header}</h4>
                    {children}
                </div>
                <div className="card-border" role="separator"></div>
                <div className="card-image">
                    <img src={imageComponents[0]} alt={imageComponents[1]} />
                </div>
            </div>
        )
    }, Norm: ({children, header}: {children: React.ReactNode, header: string}) => {
        return (
            <div className="card">
                <h4>{header}</h4>
                {children}
                {/* <hr/> */}
            </div>
        )
    }, Half: ({left, right}: {left: React.ReactNode, right: React.ReactNode}) => {
        return (
            <div className="card card-half">
                <div>{left}</div>
                <div className="card-border" role="separator"></div>
                <div>{right}</div>
            </div>
        )
    }, Image: ({src, alt}: {src: string, alt: string}) => {
        return <img className="card-image" src={src} alt={alt} />
    }
}
export default Card;

export function LearnMore({link}: {link: string}) {
    return (
        <p className="learn-more"><Link href={link}>Learn more</Link></p>
    )
}