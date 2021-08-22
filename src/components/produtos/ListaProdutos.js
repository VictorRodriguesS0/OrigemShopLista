import React, { Component, Fragment } from "react";
import CardProduto from "./CardProduto";
import Api from "../../Api";
import ListaCategorias from "../categorias/ListaCategorias";

export default class ListaProdutos extends Component {
  state = {
    produto: null,
  };

  componentDidMount() {
    // const res = await axios.get(this.state.url);
    // this.setState({ produto: res.data });
    // console.log(this.state);
    
    const loadAll = async () => {
      let listaProdutos = await Api.getProdutos();
      
      this.setState({produto: listaProdutos.produtos})
      console.log("produtos", this.state.produto)
    }

    loadAll();
  
  }
  
  
  render() {
    return (
      <Fragment>
        <ListaCategorias />
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
