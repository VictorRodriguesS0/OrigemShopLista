import React, { Component } from "react";
import ListaCategorias from "../categorias/ListaCategorias";
import ListaProdutos from "../produtos/ListaProdutos";
import Api from "../../Api";

export default class Dashboard extends Component {
  state = {
    produtos: null,
    categorias: [],
  };

  componentDidMount() {
    function uniq(categorias) {
      return Array.from(new Set(categorias));
    }
    const loadAll = async () => {
      let produtos = await Api.getProdutos();
      let categorias = produtos.produtos.map(function (item) {
        return item.categoria;
      });
      categorias = uniq(categorias);
      this.setState({
        produtos: produtos.produtos,
        categorias: categorias,
      });
    };

    loadAll();
  }

  render() {
    console.log("Dash", this.state);
    return (
      <div className="row">
        <div className="col">
          <ListaCategorias
            categorias={this.state.categorias}
            produtos={this.state.produtos}
          />
          {/* <ListaProdutos produtos={this.state.produtos} /> */}
        </div>
      </div>
    );
  }
}
