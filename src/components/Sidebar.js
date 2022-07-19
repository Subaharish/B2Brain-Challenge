import React from "react"
import logo from "../images/B2Brain.png"
import home from "../images/mini-logo/home.png"
import building from "../images/mini-logo/building.png"
import cog from "../images/mini-logo/cog.png"
import comments from "../images/mini-logo/comments-alt.png"
import link from "../images/mini-logo/link.png"
import star from "../images/mini-logo/star.png"
import user from "../images/mini-logo/user.png"
import users from "../images/mini-logo/users.png"

export default function Sidebar(){
    const [isAccount, setisAccount] = React.useState(true)
    const [isPreference, setisPreference] = React.useState(true)
    
    function toggle(name){
        name === "preference" ? setisPreference(prevState => !prevState) : setisAccount(prevState => !prevState)
    }
    return(
        <div className="sidebar">
            <div className="Nav-header">
                <img src={logo} />
                <h2>B2Brain</h2>
            </div>
            <ul className="sidebar-contents">
                <li><a href="#" className="active"><img src={home}/>Dashboard</a></li>
                <li className="notification"><a href="#" ><img src={star}/>Intels <span> 4 unread</span></a></li>
                <li className="notification"><a href="#" ><img src={user}/> Leads <span> 4 unseen</span></a></li>
                <li className="dropdown-content"><a href="#" onClick={()=>toggle("Account")}><img src={building}/>Accounts {isAccount ? <i class="fa-solid fa-angle-down arrow"></i>:<i class="fa-solid fa-angle-up arrow"></i>}</a>
                    {
                        isAccount &&
                        <ul className="dropdown">
                            <li>Manage all</li>
                            <li>Track new accounts</li>
                            <li>Bulk import</li>
                        </ul>
                    }
                </li>
                <li className="dropdown-content"><a href="#" onClick={()=>toggle("preference")}><img src={cog}/>Preferences {isPreference ? <i class="fa-solid fa-angle-down arrow"></i>:<i class="fa-solid fa-angle-up arrow"></i>}</a>
                    {
                        isPreference && 
                        <ul className="dropdown">
                                <li>Product Focus</li>
                                <li>Intel Preferences</li>
                                <li>Lead Persona</li>
                        </ul>
                    }
                </li>
                <li><a href="#"><img src={link}/>Integrations</a></li>
                <li><a href="#"><img src={users}/>Team</a></li>
                <li><a href="#"><img src={comments}/>Help / Support</a></li>
            </ul>
        </div>
    )
}