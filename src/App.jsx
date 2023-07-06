import { useState } from "react";
import Todo from "./components/Todo";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./App.css";
import TodoForm from "./components/TodoForm";

const App = () => {
  // Estado para armazenar as tarefas
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  // Estado para armazenar o filtro selecionado
  const [filter, setFilter] = useState("All");

  // Estado para armazenar a ordenação selecionada
  const [sort, setSort] = useState("Asc");

  // Estado para armazenar o texto de busca
  const [search, setSearch] = useState("");

  // Função para adicionar uma nova tarefa
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 1000), text, category, isCompleted: false },
    ];
    setTodos(newTodos);
  };

  // Função para remover uma tarefa
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Função para marcar uma tarefa como concluída ou não concluída
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      {/* Componente de busca */}
      <Search search={search} setSearch={setSearch} />

      {/* Componente de filtro e ordenação */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo-list">
        {/* Renderização das tarefas filtradas, ordenadas e mapeadas */}
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
          )
          .map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
      </div>

      {/* Componente de formulário para adicionar tarefas */}
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
