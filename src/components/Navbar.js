import React from "react"
import firstlogo from "../images/Logo.png"
import secondlogo from "../images/Logo1.png"
import bell from "../images/mini-logo/bell.png"

export default function Navbar(prop){
    const newstyle= {
        opacity : "1",
        fontWeight: "600"
    }
    const oldstyle= {
        opacity : "0.3"
    }
    
    return(
        <nav>
            {!prop.display && <a onClick={prop.handleClick}><i class="fa-solid fa-magnifying-glass search"></i></a>}
            {prop.display && <a onClick={prop.handleClick}><i class="fa-solid fa-xmark cross"></i></a>}
            <input type="text" placeholder="Search by account name or website"  className="searchField" onClick={prop.click} onChange={prop.handleChange} name="name" value={prop.value.name} style={prop.value.name ? newstyle : oldstyle}/>
            <div className="logo-element">
                <img src={bell}  className="overlap-logo" />
                <span className="dot"></span>
                <img src={firstlogo}  className="logo" />
                <img src={secondlogo}  className="logo" />
            </div>
        </nav>
    )
}
