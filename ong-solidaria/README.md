# Solidariedade em Ação

Aplicação front-end desenvolvida como projeto académico para simular o site de uma ONG fictícia. O projeto reúne apresentação institucional, divulgação de projetos sociais, cadastro de voluntários e consulta dos dados armazenados no navegador.

## Funcionalidades

- Navegação SPA com JavaScript e ES Modules.
- Página inicial e listagem dinâmica de projetos.
- Cadastro de voluntários.
- Máscaras de CPF, telefone e CEP com IMask.
- Validação de formulário.
- Persistência com `localStorage`.
- Listagem e remoção de voluntários.
- Modal de confirmação e mensagens de feedback.
- Layout responsivo.
- Estrutura HTML semântica e recursos de acessibilidade.

## Tecnologias

- HTML5
- CSS3
- JavaScript ES6+
- ES Modules
- Vite
- IMask
- Git e GitHub
- GitHub Actions
- GitHub Pages

## Estrutura

```text
ong-solidaria/
├── .github/workflows/deploy.yml
├── css/style.css
├── docs/
│   ├── ACCESSIBILITY.md
│   └── DEPLOY.md
├── html/index.html
├── images/
├── js/
│   ├── app.js
│   ├── components.js
│   ├── data.js
│   ├── masks.js
│   ├── router.js
│   ├── storage.js
│   ├── templates.js
│   ├── utils.js
│   └── validation.js
├── .editorconfig
├── .gitignore
├── CHANGELOG.md
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Como executar localmente

```bash
git clone <URL_DO_REPOSITORIO>
cd ong-solidaria
npm install
npm run dev
```

O Vite exibirá a URL local, normalmente `http://localhost:5173/`.

## Build de produção

```bash
npm run build
npm run preview
```

A build final é gerada em `dist/`.

## Arquitetura

- `app.js`: inicialização da aplicação.
- `router.js`: navegação da SPA.
- `templates.js`: templates das rotas.
- `data.js`: dados dos projetos.
- `validation.js`: validação do formulário.
- `masks.js`: máscaras de entrada.
- `storage.js`: persistência com `localStorage`.
- `components.js`: modal, toast e outros componentes.
- `utils.js`: funções utilitárias.

## Acessibilidade

Foram consideradas boas práticas como landmarks semânticos, labels associados aos campos, navegação por teclado, foco visível, mensagens acessíveis e informação de erro que não depende apenas de cor.

Veja mais em [`docs/ACCESSIBILITY.md`](docs/ACCESSIBILITY.md).

## Versionamento

Branches:

- `main`: versão estável.
- `develop`: integração.
- `feature/*`: novas funcionalidades.

Padrão de commits:

```text
feat: nova funcionalidade
fix: correção
docs: documentação
refactor: reorganização sem alteração de comportamento
build: configuração de build
ci: integração e entrega contínua
```

O versionamento segue SemVer: `MAJOR.MINOR.PATCH`.

## CI/CD

O deploy é feito com GitHub Actions e GitHub Pages. A cada `push` na `main`, o workflow instala dependências, executa a build e publica `dist/`.

Veja mais em [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Desempenho

O Vite minifica JavaScript e CSS durante a build. Imagens devem ser dimensionadas e comprimidas antes da publicação; formatos modernos como WebP podem ser utilizados na versão final.

## Autor

**Nicolas Martins**

Projeto desenvolvido para fins académicos.
