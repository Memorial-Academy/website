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
    }
}
export default Card;

export function LearnMore({link}: {link: string}) {
    return (
        <p className="learn-more"><a href={link}>Learn more</a></p>
    )
}