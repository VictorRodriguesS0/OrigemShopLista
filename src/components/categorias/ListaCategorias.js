import React, { Component, Fragment } from "react";
import CardCategoria from "./CardCategoria";
import ListaProdutos from "../produtos/ListaProdutos";
import Api from "../../Api";

export default class ListaCategorias extends Component {
  state = {
    todos: false,
    produtosFiltrados: [],
    categoria: "",
  };

  componentDidMount() {
    let listaCategorias = this.props.categorias;

    this.setState({
      categorias: listaCategorias,
    });

    console.log(listaCategorias, this.props.categorias);
  }

  async handleClick(entrada, categoria) {
    this.setState({
      todos: entrada,
    });

    if (entrada) {
      // Se selecionar o botão "Todos os Produtos", retorna a lista completa de produtos
      let todosProdutos = this.props.produtos;
      this.setState({
        produtosFiltrados: todosProdutos,
      });
      return this.props.produtos;
    } else {
      // Se não, retorna a lista de produtos filtrados por categoria selecionada
      let produtosFiltrados = await Api.getFiltrados(encodeURI(categoria));
      produtosFiltrados = produtosFiltrados.produtosFiltrados;
      this.setState({
        produtosFiltrados,
        categoria,
      });
      return categoria, produtosFiltrados;
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Categorias</h1>
        {this.props.categorias ? (
          <div className="list-group">
            <button
              className="list-group-item list-group-item-action"
              onClick={() => this.handleClick(true)}
            >
              Todos os produtos
            </button>
            {this.props.categorias.map((categoria, key) => (
              <button
                className="list-group-item list-group-item-action"
                key={key}
                onClick={() => this.handleClick(false, categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        ) : (
          <h1>Carregando Categorias</h1>
        )}
        <ListaProdutos produtos={this.state.produtosFiltrados} />
      </Fragment>
    );
  }
}
