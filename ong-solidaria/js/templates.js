import ongHero
  from "../images/ong-hero.png";

import { projetos } from "./data.js";

import {
  escapeHTML,
  formatDateBR
} from "./utils.js";


export function homeTemplate() {
  return `
    <section class="hero">
      <div class="container">

        <img
          src="${ongHero}"
          alt="Voluntários participando de uma ação social"
        >

        <h1>
          Solidariedade em Ação
        </h1>

        <p>
          Conectamos pessoas dispostas a ajudar
          com comunidades que precisam de apoio.
        </p>

        <a
          href="#cadastro"
          data-route="cadastro"
          class="button"
        >
          Quero ser voluntário
        </a>

      </div>
    </section>


    <section class="section">
      <div class="container">

        <div class="section-header">
          <p class="eyebrow">
            Nossa missão
          </p>

          <h2>
            Transformando solidariedade em impacto
          </h2>

          <p>
            Desenvolvemos projetos sociais nas áreas
            de educação, alimentação e assistência
            comunitária.
          </p>
        </div>

        <div class="grid-12">

          <article class="feature-card">
            <h3>Projetos sociais</h3>

            <p>
              Conheça as iniciativas desenvolvidas
              pela organização.
            </p>

            <a
              href="#projetos"
              data-route="projetos"
            >
              Ver projetos →
            </a>
          </article>

          <article class="feature-card">
            <h3>Voluntariado</h3>

            <p>
              Doe seu tempo e suas habilidades para
              ajudar nossa comunidade.
            </p>

            <a
              href="#cadastro"
              data-route="cadastro"
            >
              Quero participar →
            </a>
          </article>

          <article class="feature-card">
            <h3>Comunidade</h3>

            <p>
              Pessoas trabalhando juntas para construir
              uma sociedade mais solidária.
            </p>
          </article>

        </div>

      </div>
    </section>
  `;
}


export function projetosTemplate() {
  const cards = projetos
    .map((projeto) => `
      <article class="project-card">

        <img
          src="${projeto.imagem}"
          alt="${escapeHTML(projeto.titulo)}"
        >

        <div class="project-card-content">

          <span class="badge badge-success">
            ${escapeHTML(projeto.status)}
          </span>

          <h2>
            ${escapeHTML(projeto.titulo)}
          </h2>

          <p>
            ${escapeHTML(projeto.descricao)}
          </p>

          <a
            href="#cadastro"
            data-route="cadastro"
            class="button button-small"
          >
            Quero colaborar
          </a>

        </div>

      </article>
    `)
    .join("");

  return `
    <section class="section">
      <div class="container">

        <div class="section-header">
          <p class="eyebrow">
            Iniciativas
          </p>

          <h1>
            Nossos projetos
          </h1>

          <p>
            Conheça nossas principais frentes
            de atuação social.
          </p>
        </div>

        <div class="grid-12 projects-grid">
          ${cards}
        </div>

      </div>
    </section>
  `;
}


export function cadastroTemplate() {
  return `
    <section class="section">

      <div class="container">

        <div class="section-header">
          <p class="eyebrow">
            Participação
          </p>

          <h1>
            Cadastro de voluntário
          </h1>

          <p>
            Preencha seus dados para demonstrar
            interesse em participar das nossas ações.
          </p>
        </div>


        <form
          id="volunteer-form"
          class="form-card"
          novalidate
        >

          <fieldset>

            <legend>
              Dados pessoais
            </legend>


            <div class="form-group">

              <label for="nome">
                Nome completo
              </label>

              <input
                type="text"
                id="nome"
                name="nome"
                autocomplete="name"
                minlength="3"
                required
              >

              <span
                class="error-message"
                id="nome-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="cpf">
                CPF
              </label>

              <input
                type="text"
                id="cpf"
                name="cpf"
                inputmode="numeric"
                placeholder="000.000.000-00"
                maxlength="14"
                required
              >

              <span
                class="error-message"
                id="cpf-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="nascimento">
                Data de nascimento
              </label>

              <input
                type="date"
                id="nascimento"
                name="nascimento"
                required
              >

              <span
                class="error-message"
                id="nascimento-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="email">
                E-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autocomplete="email"
                required
              >

              <span
                class="error-message"
                id="email-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="telefone">
                Telefone
              </label>

              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                maxlength="15"
                required
              >

              <span
                class="error-message"
                id="telefone-error"
              ></span>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Endereço
            </legend>


            <div class="form-group">

              <label for="cep">
                CEP
              </label>

              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                maxlength="9"
                required
              >

              <span
                class="error-message"
                id="cep-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="endereco">
                Endereço
              </label>

              <input
                type="text"
                id="endereco"
                name="endereco"
                required
              >

              <span
                class="error-message"
                id="endereco-error"
              ></span>

            </div>


            <div class="form-grid">

              <div class="form-group">

                <label for="cidade">
                  Cidade
                </label>

                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                >

                <span
                  class="error-message"
                  id="cidade-error"
                ></span>

              </div>


              <div class="form-group">

                <label for="estado">
                  Estado
                </label>

                <select
                  id="estado"
                  name="estado"
                  required
                >
                  <option value="">
                    Selecione
                  </option>

                  <option value="RS">
                    Rio Grande do Sul
                  </option>

                  <option value="SC">
                    Santa Catarina
                  </option>

                  <option value="PR">
                    Paraná
                  </option>

                  <option value="SP">
                    São Paulo
                  </option>

                  <option value="RJ">
                    Rio de Janeiro
                  </option>
                </select>

                <span
                  class="error-message"
                  id="estado-error"
                ></span>

              </div>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Participação
            </legend>


            <div class="form-group">

              <label for="area">
                Área de interesse
              </label>

              <select
                id="area"
                name="area"
                required
              >

                <option value="">
                  Selecione
                </option>

                <option value="Educação">
                  Educação
                </option>

                <option value="Alimentação">
                  Alimentação
                </option>

                <option value="Eventos">
                  Eventos
                </option>

                <option value="Comunicação">
                  Comunicação
                </option>

                <option value="Administrativo">
                  Administrativo
                </option>

              </select>

              <span
                class="error-message"
                id="area-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="mensagem">
                Como deseja colaborar?
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                maxlength="500"
              ></textarea>

            </div>


            <div class="checkbox-group">

              <input
                type="checkbox"
                id="termos"
                name="termos"
                required
              >

              <label for="termos">
                Concordo com o tratamento dos meus
                dados para fins relacionados ao
                programa de voluntariado.
              </label>

            </div>

            <span
              class="error-message"
              id="termos-error"
            ></span>

          </fieldset>


          <button
            type="submit"
            class="button"
          >
            Enviar cadastro
          </button>

        </form>

      </div>
    </section>
  `;
}


export function voluntariosTemplate(
  voluntarios
) {
  if (!voluntarios.length) {
    return `
      <section class="section">

        <div class="container">

          <div class="section-header">
            <p class="eyebrow">
              LocalStorage
            </p>

            <h1>
              Voluntários cadastrados
            </h1>
          </div>

          <div class="empty-state">

            <h2>
              Nenhum voluntário cadastrado
            </h2>

            <p>
              Os cadastros realizados serão armazenados
              no navegador e aparecerão aqui.
            </p>

            <a
              href="#cadastro"
              data-route="cadastro"
              class="button"
            >
              Fazer primeiro cadastro
            </a>

          </div>

        </div>

      </section>
    `;
  }


  const cards = voluntarios
    .map((voluntario) => `
      <article class="volunteer-card">

        <div class="volunteer-card-header">

          <div>
            <span class="badge badge-success">
              Voluntário
            </span>

            <h2>
              ${escapeHTML(voluntario.nome)}
            </h2>
          </div>

          <button
            type="button"
            class="button-icon danger"
            data-delete-volunteer="${voluntario.id}"
            aria-label="Excluir ${escapeHTML(voluntario.nome)}"
          >
            ×
          </button>

        </div>


        <dl class="volunteer-details">

          <div>
            <dt>E-mail</dt>
            <dd>
              ${escapeHTML(voluntario.email)}
            </dd>
          </div>

          <div>
            <dt>Telefone</dt>
            <dd>
              ${escapeHTML(voluntario.telefone)}
            </dd>
          </div>

          <div>
            <dt>Cidade</dt>
            <dd>
              ${escapeHTML(voluntario.cidade)}
              -
              ${escapeHTML(voluntario.estado)}
            </dd>
          </div>

          <div>
            <dt>Área</dt>
            <dd>
              ${escapeHTML(voluntario.area)}
            </dd>
          </div>

          <div>
            <dt>Cadastro</dt>
            <dd>
              ${formatDateBR(voluntario.criadoEm)}
            </dd>
          </div>

        </dl>

      </article>
    `)
    .join("");


  return `
    <section class="section">

      <div class="container">

        <div class="section-header">

          <p class="eyebrow">
            LocalStorage
          </p>

          <h1>
            Voluntários cadastrados
          </h1>

          <p>
            Estes dados foram recuperados diretamente
            do armazenamento local do navegador.
          </p>

        </div>

        <div class="volunteer-list">
          ${cards}
        </div>

      </div>

    </section>
  `;
}


export function notFoundTemplate() {
  return `
    <section class="section">

      <div class="container empty-state">

        <h1>
          Página não encontrada
        </h1>

        <a
          href="#home"
          data-route="home"
          class="button"
        >
          Voltar ao início
        </a>

      </div>

    </section>
  `;
}