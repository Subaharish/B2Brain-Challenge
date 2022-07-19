import React from "react"
import Companylist from "./Companylist"


export default function Content(prop){
    const  list = prop.details.map((el)=>{
        return < Companylist company={el.company} website ={el.website} logo={el.logo} slug={el.slug} color ={el.color}/>
    })
    return(
        <div className="search-content">
            <div className="similar-account">
                <h2>Similar accounts</h2>
                <div className="company-list">
                    {list}
                </div>
            </div>
            <div className="quick-action">
                <h2>Quick Actions</h2>
                <ul>
                    <li>Track new account</li>
                    <li>Bulk track accounts</li>
                    <li>Manage accounts</li>
                </ul>
            </div>
        </div>
    )
}    