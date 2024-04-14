import React from "react";

export default function BulletList({title, points}: {title: string, points: Array<string | React.ReactNode>}) {
    var list = points.map((point) => {
        return <li>{point}</li>
    })

    return (
        <>
            <p><b>{title}</b></p>
            <ul>
                {list}
            </ul>
        </>
    )
}