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

export default class CardProduto extends Component {
  state = {
    id: "",
    titulo: "",
    descricao: "",
    categoria: "",
    preco: "",
    imagem: "",
    imageLoading: true,
    imageError: false,
  };

  componentDidMount() {
    const { id, titulo, descricao, categoria, preco, imagem } = this.props;
    this.setState({
      id,
      titulo,
      descricao,
      categoria,
      preco,
      imagem,
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <StyleLink to={`produto/${this.props.id}`}>
          <Card className="card">
            {this.props.imagem ? (
              <Sprite
                className="card-img-top rounded mx-auto mt-2"
                onLoad={() => this.setState({ imageLoading: false })}
                onError={() => this.setState({ imageError: true })}
                src={this.props.imagem}
              />
            ) : (
              <h6 className="mx-auto">
                <span className="mt-2">Sem foto</span>{" "}
              </h6>
            )}

            <h5 className="card-header">{this.props.titulo}</h5>
            <div className="card-body card-title mx-auto">
              {this.props.preco}
            </div>
          </Card>
        </StyleLink>
      </div>
    );
  }
}
