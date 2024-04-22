import React from "react";

export default function BulletList({title, points}: {title: string, points: Array<string | React.ReactNode>}) {
    var keyCount = 0;
    var list = points.map((point) => {
        keyCount++;
        return <li key={title + "-" + keyCount}>{point}</li>
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