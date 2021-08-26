import React, { Component } from "react";
import styled from "styled-components";
import logo from "../img/logoSaude.png";

const StyledNavBar = styled.nav`
  position: fixed;
  left: 0px;
  box-sizing: border-box;
  width: 100%;
  height: 2.77778rem;
  font-size: 0.833333rem;
  font-weight: 500;
  background: rgb(33, 33, 33);
  color: white;
  padding: 0px;
`;

const StyledDiv1 = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 1.11111rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Origem Shop
          </a>
        </nav>
      </div>
    );
  }
}
