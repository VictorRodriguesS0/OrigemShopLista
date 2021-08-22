import React, { Component, Fragment } from "react";
import CardCategoria from "./CardCategoria";
import Api from "../../Api";

export default class ListaCategorias extends Component {
  state = {
    categorias: null,
  };

  componentDidMount() {
    function uniq(listaCategorias) {
      return Array.from(new Set(listaCategorias));
    }

    const loadAll = async () => {
      let listaProdutos = await Api.getProdutos();

      let listaCategorias = listaProdutos.produtos.map(function (item) {
        return item.categoria;
      });

      listaCategorias = uniq(listaCategorias);
      console.log("categorias", listaCategorias);
      this.setState({ categorias: listaCategorias });
      console.log("Brauzin", this.state.categorias);
    };

    loadAll();
  }

  render() {
    console.log(this.state.categorias);
    return (
      <Fragment>
        <h1>Categorias</h1>
        <CardCategoria categoria={this.state.categorias}/>
      </Fragment>
    );
  }
}
