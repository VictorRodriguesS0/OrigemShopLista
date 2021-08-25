// https://sheet.best/api/sheets/ac6e80c7-3b3d-4349-92aa-ff5ebf796902

import axios from "axios";

const API_BASE =
  "https://sheet.best/api/sheets/5abdfe25-e959-4f8e-9439-a8d23a1eaf93";

const pegaDados = async (endpoint) => {
  const req = await axios.get(`${API_BASE}${endpoint}`);
  console.log("Pega Dados", req);
  return req.data;
};

export default {
  getProdutos: async () => {
    return {
      slug: "produtos",
      title: "Todos os Produtos",
      produtos: await pegaDados(``),
    };
  },
  getFiltrados: async (categoria) => {
    return {
      produtosFiltrados: await pegaDados(`/categoria/${categoria}`),
    };
  },
  API_BASE,
};
