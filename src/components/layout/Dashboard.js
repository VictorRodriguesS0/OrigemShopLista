import React, { Component } from "react";
import ListaProdutos from "../produtos/ListaProdutos";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <ListaProdutos />
        </div>
      </div>
    );
  }
}
