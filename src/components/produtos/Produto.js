import React, { Component } from "react";
import axios from "axios";

export default class Produto extends Component {
  state = {
    id: "",
    titulo: "",
    descricao: "",
    categoria: "",
    preco: "",
    imagem: "",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const urlProduto = `https://sheet.best/api/sheets/ac6e80c7-3b3d-4349-92aa-ff5ebf796902/id/${id}`;
    const produtoRes = await axios.get(urlProduto);
    const produto = produtoRes.data[0];
    this.setState({
      id,
      titulo: produto.titulo,
      descricao: produto.descricao,
      categoria: produto.categoria,
      preco: produto.preco,
      imagem: produto.imagem,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={this.state.imagem}
              className="img-fluid rounded-start"
              alt={this.state.titulo}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.state.titulo}</h5>
              <p className="card-text">{this.state.descricao}</p>
              <p className="card-text">
                <small className="text-muted">{this.state.preco}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
