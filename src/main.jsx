import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Renderiza o componente App dentro do elemento com o id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* Neste código, estamos utilizando o método createRoot do ReactDOM para criar uma raiz de renderização. Passamos o elemento HTML com o id "root" como argumento para o método getElementById, que retornará o elemento no qual desejamos renderizar o componente App.

Em seguida, utilizamos o método render para renderizar o componente App dentro da raiz de renderização. Utilizamos o componente <React.StrictMode> para habilitar o modo de estrito no React e verificar possíveis problemas durante o desenvolvimento.

Assim, o componente App será renderizado no elemento com o id "root" da página */