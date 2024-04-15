import "../styles/bio-card.css";
import React from "react";

type BioCardProps = {
    name: string,
    title: string,
    img: string,
    bio: string
}

export default function BioCards({cards}: {cards: Array<BioCardProps>}) {
    var cardElems = [];
    
    for (var card of cards) {
        var newCard = (
            <div className="bio-card">
                <img src={card.img ? card.img : "/seal.svg"} alt={`Picture of ${card.name}`} />
                <p className="bio-card-name">{card.name}</p>
                <p className="bio-card-title">{card.title}</p>
                <p>{card.bio}</p>
            </div>
        )
        cardElems.push(newCard);
    }

    return (
        <div className="bio-card-container">
            {cardElems}
        </div>
    )
}