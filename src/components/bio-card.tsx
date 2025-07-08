import "../styles/bio-card.css";
import React from "react";

type BioCardProps = {
    name: string,
    title: string,
    img: string,
    bio: string
}

export default function BioCards({cards, heading}: {cards: Array<BioCardProps>, heading: string}) {
    var cardElems = [];
    
    for (var card of cards) {
        var titles = card.title.split("; ").map(str => {
            return <span key={str}>{str}<br/></span>
        });
        var newCard = (
            <div className="bio-card" key={card.name + "_bio"}>
                <img src={card.img ? card.img : "/seal.svg"} alt={`Picture of ${card.name}`} />
                <p className="bio-card-name">{card.name}</p>
                <p className="bio-card-title">{titles}</p>
                <p className="bio-card-about">{card.bio}</p>
            </div>
        )
        cardElems.push(newCard);
    }

    return (
        <>
            <h4>{heading}</h4>
            <div className="bio-card-container">
                {cardElems}
            </div>
        </>
    )
}