import Inputs1 from "../Inputs/Inputs1"
import Logo from "../Logo/Logo"
import Textt from "../Textt/Textt"
import "../Pages_css/Sign_up.css"
import Radio_input from "../Inputs/Radio_input"
import Date from "../Inputs/Date"
import Buttons from "../Buttons/Buttons"
import React from "react"
import Inputpassw from "../Inputs/Input_passw"

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