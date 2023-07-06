// O componente Search é responsável por renderizar a barra de pesquisa.
// Ele recebe as propriedades `search` e `setSearch` por meio do destructuring.
const Search = ({ search, setSearch }) => (

// Início do componente Search

  <div className="search">
    <h2>Pesquisar:</h2>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Digite para pesquisar..."
    />
  </div>
);

// Fim do componente Search

export default Search;
