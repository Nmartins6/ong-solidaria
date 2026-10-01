# Deploy

O projeto utiliza Vite para gerar a versão de produção e GitHub Pages para publicação.

## Build local

```bash
npm install
npm run build
npm run preview
```

A saída é criada em `dist/`.

## GitHub Pages

1. Abra o repositório no GitHub.
2. Aceda a `Settings`.
3. Entre em `Pages`.
4. Em `Build and deployment`, selecione `GitHub Actions`.
5. Confirme que `.github/workflows/deploy.yml` está versionado.
6. Faça `push` para `main`.
7. Acompanhe a execução em `Actions`.
8. Após o workflow concluir, abra o URL publicado.

## Fluxo de CI/CD

```text
push na main
      ↓
checkout
      ↓
setup Node.js
      ↓
npm ci
      ↓
npm run build
      ↓
upload de dist/
      ↓
deploy no GitHub Pages
```

## Checklist pós-deploy

- [ ] Abrir o URL público.
- [ ] Testar navegação.
- [ ] Confirmar CSS e JavaScript.
- [ ] Verificar imagens.
- [ ] Testar formulário e validações.
- [ ] Testar `localStorage`.
- [ ] Testar modal e toast.
- [ ] Testar mobile.
- [ ] Verificar o console por erros 404.
