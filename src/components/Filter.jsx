// O componente Filter é responsável por renderizar as opções de filtragem e ordenação.
// Ele recebe as propriedades `filter`, `setFilter` e `setSort` por meio do destructuring.
function Filter({ filter, setFilter, setSort }) {
  // Início do componente Filter

  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          {/* O elemento select exibe a opção selecionada com base no valor de `filter`.
                O evento onChange chama a função `setFilter` passando o novo valor selecionado. */}
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>

        <div>
          <p>Ordem alfabética:</p>
          {/* Os botões "Asc" e "Desc" chamam a função `setSort` com o valor correspondente
                quando são clicados. */}
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
}

// Fim do componente Filter

export default Filter;
