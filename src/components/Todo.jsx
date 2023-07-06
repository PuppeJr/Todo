// O componente Todo é responsável por renderizar um item de tarefa.
// Ele recebe as propriedades `todo`, `completeTodo` e `removeTodo` por meio do destructuring.
const Todo = ({ todo, completeTodo, removeTodo }) => {

// Início do componente Todo

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

// Fim do componente Todo

export default Todo;
