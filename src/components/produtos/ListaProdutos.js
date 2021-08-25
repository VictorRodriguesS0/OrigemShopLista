import React, { Component, Fragment } from "react";
import CardProduto from "./CardProduto";
import Api from "../../Api";
import ListaCategorias from "../categorias/ListaCategorias";

export default class ListaProdutos extends Component {
  render() {
    return (
      <Fragment>
        <h1>Produtos</h1>
        {this.props.produtos ? (
          <div className="row">
            {this.props.produtos.map((produto) => (
              <CardProduto
                key={produto.id}
                id={produto.id}
                titulo={produto.titulo}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.imagem}
              />
            ))}
          </div>
        ) : (
          <h1>Carregando Produtos</h1>
        )}
      </Fragment>
    );
  }
}
