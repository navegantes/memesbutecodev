<h1 align="center">Memes Buteco dos Devs</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/navegantes/memesbutecodev?color=FF8400">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/navegantes/memesbutecodev?color=FF8400">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/navegantes/memesbutecodev?color=FF8400">

  <img alt="Licença" src="https://img.shields.io/github/license/navegantes/memesbutecodev?color=FF8400">
  
  <img alt="Github stars" src="https://img.shields.io/github/stars/navegantes/memesbutecodev?color=FF8400" />
  
  <img alt="Github forks" src="https://img.shields.io/github/forks/navegantes/memesbutecodev?color=FF8400" />
</p>

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/navegantes/memesbutecodev?color=56BEB8" /> -->

<!-- Status -->

<!-- <h4 align="center">
	🚧  PokeReal:dex 🚀 Em construção...  🚧
</h4>  -->

<hr>

<!-- <p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-pré-requisitos">Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="#memo-licença">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/navegantes" target="_blank">Autor</a>
</p> -->

<br>

<div align="center" id="top"> 
  <img src="./public/Logo.png" alt="PokeReal Dex" />
</div>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/navegantes.png" width="100px;" alt="Foto do perfil de Navegantes no GitHub"/><br>
        <sub>
          <b>Navegantes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/CodeMoreira">
        <img src="https://github.com/CodeMoreira.png" width="100px;" alt="Foto do perfil da TreinaWeb no GitHub"/><br>
        <sub>
          <b>Gabriel Moreira Mattos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
