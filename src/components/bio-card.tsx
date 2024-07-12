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
        var titles = card.title.split("; ").map(str => {return <>{str}<br/></>});
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
        <div className="bio-card-container">
            {cardElems}
        </div>
    )
}