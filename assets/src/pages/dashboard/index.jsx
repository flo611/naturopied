import React from "react";
import NavbarMobile from "../../components/layouts/navbar/mobile";
import Navbardesktop from "../../components/layouts/navbar/desktop";

import Login from "./login";
import Footer from "../../components/layouts/footer";
 
const Dashboard =()=>{
return (
<>
<Navbardesktop/>
<NavbarMobile/>
<Login/>
<Footer/>

</>
  );
};
export default Dashboard;
