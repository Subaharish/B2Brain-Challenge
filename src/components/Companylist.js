import React, { useState } from "react"

export default function Companylist(prop){ 
    const [track, settrack]= useState()
    const date = new Date().getTime();
    const style ={
        backgroundColor: `${prop.color}`
    }
    const initial = <span className="initial" style ={style}>{`${prop.company[0]}`}</span>
    const Logo= prop.logo !="" ?  <img src={prop.logo}/> : initial
    const newStyle = {
        border: "1px solid #1AAB2B",
        color:"#1AAB2B",
        marginLeft: "30px"
    }
    const oldStyle = {
        border: "1px solid #F44336",
        color:"#F44336"
    }

    function tracking(){
        console.log(`${prop.company} ${prop.slug} tracked at ${date}`)
        settrack( prevState => !prevState)
    }

    return(
        <div className="content-list">
            {Logo}
            <div className="content-text">
                <h4>{prop.company}</h4>
                <p>{prop.website}</p>
            </div>
            <button onClick={tracking} style={track ? newStyle : oldStyle}>{track ? "Tracking" : "Track"} </button>
        </div>
    )
}