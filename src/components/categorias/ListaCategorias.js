import React, { Component, Fragment } from "react";
import CardCategoria from "./CardCategoria";
import Api from "../../Api";

export default class ListaCategorias extends Component {

  componentDidMount() {
    // function uniq(listaCategorias) {
    //   return Array.from(new Set(listaCategorias));
    // }

    // const loadAll = async () => {
    //   let listaProdutos = await Api.getProdutos();

    //   let listaCategorias = listaProdutos.produtos.map(function (item) {
    //     return item.categoria;
    //   });

    //   listaCategorias = uniq(listaCategorias);
    //   this.setState({ categorias: listaCategorias });
    // };

    // loadAll();

    let listaCategorias = this.props.categorias

    this.setState({
      categorias: listaCategorias
    })

    console.log(listaCategorias, this.props.categorias)
  }

  render() {
    return (
      <Fragment>
        <h1>Categorias</h1>
        {this.props.categorias ? (
          <ul className="list-group">
            <li className="list-group-item">Todos os produtos</li>
            {this.props.categorias.map((categoria, key) => (
              <li className="list-group-item" key={key}>{categoria}</li>
            ))}
          </ul>
        ) : (
          <h1>Carregando Categorias</h1>
        )}
      </Fragment>
    );
  }
}
