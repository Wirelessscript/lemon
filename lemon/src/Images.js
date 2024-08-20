import React from "react";

import logo from "./public/images/logo.jpeg";


const imagesList= [
    {
        id: logo,
        src: logo,
        alt: "Logo"
    }
]

function ImagesComponents() {
    return (
        <div>
            {imagesList.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
    )
}

export default ImagesComponents;