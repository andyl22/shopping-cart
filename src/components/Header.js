import React from "react";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header>
      <NavBar pageHeader = {props.pageHeader}/>
    </header>
  )
}

export default Header;