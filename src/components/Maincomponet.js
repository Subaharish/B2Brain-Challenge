import React from "react"
import img1 from "../images/hero-image.png"
import img2 from "../images/hero-image2.png"
import img3 from "../images/hero-image1.png"

export default function Maincomponet(){
    return(
        <div className="main">
            <img src={img1}     style ={{width:"100%"}} />
            <img src={img2}     style ={{width:"100%"}}/>
            <img src={img3}     style ={{width:"100%"}}/>
        </div>
    )
}    