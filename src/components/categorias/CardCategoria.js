import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sprite = styled.img`
  max-width: 100%;
`;
const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class CardCategoria extends Component {
  state = {
    categoria: [],
  };

  componentDidMount() {
    const {categoria} = this.props;
    this.setState({
      categoria,
    });
  }

  render() {
      console.log("CardCategoria",this.state.categoria)
    return (
      <div className="col-md-3 col-sm-6 mb-5">
          <Card className="card">
            <div className="card-body card-title mx-auto">
              {this.state.categoria}
            </div>
          </Card>
      </div>
    );
  }
}
