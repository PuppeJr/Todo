import React, { useState } from 'react';

// O componente TodoForm é responsável por renderizar o formulário de criação de uma nova tarefa.
// Ele recebe a propriedade `addTodo` que é uma função responsável por adicionar a nova tarefa.
const TodoForm = ({ addTodo }) => {

// Início do componente TodoForm

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={value}
          placeholder='Digite o título'
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=''>Selecione uma categoria</option>
          <option value='Trabalho'>Trabalho</option>
          <option value='Pessoal'>Pessoal</option>
          <option value='Estudo'>Estudo</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  );
};

// Fim do componente TodoForm

export default TodoForm;

/*Ele utiliza os hooks useState para gerenciar os estados do valor do input (value) e da categoria selecionada (category). O evento handleSubmit é chamado quando o formulário é enviado, e ele verifica se o valor não está vazio antes de chamar a função addTodo para adicionar a nova tarefa. Após o envio do formulário, os estados value e category são redefinidos para os valores iniciais vazios.

No retorno do componente, temos o JSX que renderiza o formulário com um input de texto para o título da tarefa e um select para selecionar a categoria. O valor dos campos é vinculado aos estados correspondentes. Quando o valor do input ou a categoria selecionada mudam, as funções setValue e setCategory são chamadas para atualizar os estados. O botão "Criar Tarefa" é usado para enviar o formulário e chama a função handleSubmit no evento onSubmit.  */