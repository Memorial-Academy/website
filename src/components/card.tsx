import "../styles/card.css";

var count = 0;

export default function Card({children, image, header}: {children: React.ReactNode, image: string, header: string}) {
    count++;

    if (count % 2 == 0) {
        return (
            <section className="card-left">
                <div className="card-image">
                    <img src={image} alt={image + ": " + header} />
                </div>
                <div className="card-border" role="separator"></div>
                <div>
                    <h4>{header}</h4>
                    {children}
                </div>
            </section>
        )
    } else {
        return (
            <section className="card-right">
                <div>
                    <h4>{header}</h4>
                    {children}
                </div>
                <div className="card-border" role="separator"></div>
                <div className="card-image">
                    <img src={image} alt={image + ": " + header} />
                </div>
            </section>
        )
    }
}

export function LearnMore({link}: {link: string}) {
    return (
        <p className="learn-more"><a href={link}>Learn more</a></p>
    )
}