import React from "react"
import Axios from "axios"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Maincomponet from "./components/Maincomponet"
import Content from "./components/Content"

export default function App(){
    const [show, setshow] = React.useState(false)
    const [allData, setallData] = React.useState([])
    const [name, setname] = React.useState({ name:"" })
    
    React.useEffect(()=>{
        const timer = setTimeout(() => {
            getData(name);
        }, 5000);

        return () => clearTimeout(timer);
    })

    function getData(name){
        Axios.get(`https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${name.name}`).then(
            (res) => {
                setallData(res.data)
            }).catch(
            (error) => {
                console.log('Show error notification!')
            })
    }
    function handleChange(event){
        setname(preState =>{
            return {
                [event.target.name] : event.target.value
            }
        })
    }
    function toggle(){
        setshow( prevshow => !prevshow)
        setname(preState =>({
          name:""  
        }) )
    }
    function click(){
        setshow( prevshow => true)
    }

    return(
        <div>
            <Navbar handleClick={toggle} click={click} display ={show} handleChange ={handleChange} value={name}/>
            <Sidebar />
            {!show && <Maincomponet />}
            {show && <Content  details={allData}/>}
        </div>
    )
}