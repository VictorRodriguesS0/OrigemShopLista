import React from "react";
import logo from "../img/logoSaude.png";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Nav className="navbar navbar-expand-lg">
        <NavLogo to="/">
          {
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          }
        </NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/categorias" activeStyle>
            Categorias
          </NavLink>
          <NavLink to="/contato" activeStyle>
            Contato
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default NavBar;
