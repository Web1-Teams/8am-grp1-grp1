

import React from "react"
import Inputs1 from "../components/Inputs/Inputs1"
import "../components/Pages_css/Log_in.css"
import Linkk from "../components/Linkk/Linkk"
import Logo from "../components/Logo/Logo"
import Buttons from "../components/Buttons/Buttons"
import '../components/Folders-css/Backgroundss.css'
import '../components/Folders-css/PageTitle.css'
import Checkbox from "../components/Inputs/Cheackbox"
import { Link } from "react-router-dom"







const Log_in=()=>{
return(

<div className="Card">
<form>
<Logo/>
<h2 className="title-log-in">Log in</h2>
<Inputs1 placeholder="Username" Type="email" className="inputslog" />
<Inputs1 placeholder="Password" Type="password" className="inputslog" />
<Buttons type="submit" className="button-log " value="Log in" />

<label className="lableee">Don't have an accaount? <Link  to="/Signup"  >  register </Link> </label>
<div className="order">
<Checkbox  inputs="forget"/>
<Linkk to="/Hoom" className="forget"  title="Forgetassword?" />
</div>
</form>
</div>
)
}
export default Log_in;