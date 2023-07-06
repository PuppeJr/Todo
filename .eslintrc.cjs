module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended', // Utiliza as regras recomendadas do ESLint
    'plugin:react/recommended', // Utiliza as regras recomendadas do ESLint para projetos React
    'plugin:react/jsx-runtime', // Permite a utilização do React JSX sem importar o React explicitamente
    'plugin:react-hooks/recommended', // Adiciona regras para o uso correto dos React Hooks
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'], // Adiciona o plugin para suporte ao React Refresh
  rules: {
    'react-refresh/only-export-components': 'warn', // Emite um aviso se um módulo exporta algo além de componentes
  },
};

/* Neste arquivo .eslintrc.cjs, temos a configuração do ESLint para o projeto. Vamos comentar cada seção:

env: Define o ambiente em que o código será executado, neste caso, no navegador.
extends: Define as configurações de regras estendidas utilizadas pelo ESLint, como as recomendadas para o ESLint e React, além das regras para o JSX e React Hooks.
parserOptions: Define as opções de análise do código, especificando a versão do ECMAScript (ES) e o tipo de módulo.
settings: Define as configurações específicas do React, neste caso, a versão utilizada é a 18.2.
plugins: Define os plugins adicionais utilizados, neste caso, o react-refresh para suporte ao React Refresh.
rules: Define as regras personalizadas, neste caso, temos uma regra que emite um aviso caso um módulo exporte algo além de componentes.
Essas configurações ajudam a manter um código mais consistente e seguindo as boas práticas recomendadas pelo ESLint e React.
 */