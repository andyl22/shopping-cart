import React from "react";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header>
      <NavBar />
      <h1>{props.pageHeader}</h1>
    </header>
  )
}

export default Header;