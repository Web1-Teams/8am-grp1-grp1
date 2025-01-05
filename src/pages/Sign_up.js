import Inputs1 from "../components/Inputs/Inputs1"
import Logo from "../components/Logo/Logo"
import Textt from "../components/Textt/Textt"
import "../components/Pages_css/Sign_up.css"
import Radio_input from "../components/Inputs/Radio_input"
import Date from "../components/Inputs/Date"
import Buttons from "../components/Buttons/Buttons"
import React from "react"
import Inputpassw from "../components/Inputs/Input_passw"
import { Link } from "react-router-dom"
const Sign_up=()=>{
    return(
    <div className="Sign-up">
        <form>
        <Logo/>
        <Textt title="create an account" className="title-Sign-up"/>

<Inputs1 Type="text" className="inputsign" placeholder="First name" />
<Inputs1 Type="text" className="inputsign" placeholder="Last name" />
<Inputs1 Type="email" className="inputsign" placeholder="Username" />
<Inputpassw  className="inputsign" placeholder="Password" />

<Radio_input className="Gender" lab1=" male"  lab2="female" />
<Date/>

</form>
</div>
    )
}
export default Sign_up