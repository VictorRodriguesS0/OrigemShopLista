import React, { Component, Fragment } from "react";
import CardProduto from "./CardProduto";
import axios from "axios";

export default class ListaProdutos extends Component {
  state = {
    url: "https://sheet.best/api/sheets/ac6e80c7-3b3d-4349-92aa-ff5ebf796902",
    produto: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ produto: res.data });
    console.log(this.state);
  }

  render() {
    return (
      <Fragment>
        {this.state.produto ? (
          <div className="row">
            {this.state.produto.map((produto) => (
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
