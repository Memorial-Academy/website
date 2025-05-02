"use client";
import { useEffect, useState } from "react";
import "@/src/styles/image_slideshow.css"

type ImageSlideshowProps = {
    images: {
        src: string,
        alt?: string
    }[]
}

export default function ImageSlideshow({images}: ImageSlideshowProps) {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (display + 1 == images.length) {
                setDisplay(0);
            } else {
                setDisplay(display + 1);
            }
        }, 9000)

        return () => clearInterval(interval);
    })


    return (
        <div 
            className="image-slideshow"
        >
            {images.map(image => {
                return <img 
                    src={image.src}
                    alt={image.alt}
                    style={{
                        transform: `translateX(${display * -100}%)`
                    }}
                />
            })}
        </div>
    )
}