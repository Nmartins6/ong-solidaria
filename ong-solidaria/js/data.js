import alimentoImagem
  from "../images/alimento-para-todos.png";

import educacaoImagem
  from "../images/educacao-que-transforma.png";

import agasalhoImagem
  from "../images/campanha-do-agasalho.png";

export const projetos = [
  {
    id: 1,
    titulo: "Alimento para Todos",
    descricao:
      "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.",
    imagem: alimentoImagem,
    status: "Ativo"
  },

  {
    id: 2,
    titulo: "Educação que Transforma",
    descricao:
      "Reforço escolar, inclusão digital e atividades educacionais para crianças e adolescentes.",
    imagem: educacaoImagem,
    status: "Em andamento"
  },

  {
    id: 3,
    titulo: "Campanha do Agasalho",
    descricao:
      "Arrecadação de roupas, calçados e cobertores para pessoas que necessitam de apoio durante o inverno.",
    imagem: agasalhoImagem,
    status: "Ativo"
  }
];