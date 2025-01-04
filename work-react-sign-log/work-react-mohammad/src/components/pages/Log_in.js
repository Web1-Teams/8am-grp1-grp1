
import Inputs1 from "../Inputs/Inputs1"
import React from "react"
import "../Pages_css/Log_in.css"
import Linkk from "../Linkk/Linkk"
import Logo from "../Logo/Logo"
import Buttons from "../Buttons/Buttons"
import '../Folders-css/Backgroundss.css'
import '../Folders-css/PageTitle.css'
import Checkbox from "../Inputs/Cheackbox"
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
<Linkk to="" className="forget"  title="Forgetassword?" />
</div>
</form>
</div>
)
}
export default Log_in;