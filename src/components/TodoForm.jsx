import { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value,category);
    setValue("");
    setCategory("");
  
};

return(
    <div className='todo-form' >
       <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
           <input 
             type='text'
             className='input'
             value = {value}
             placeholder='Digite o título'
             onChange={(e) => setValue(e.target.value)}
           />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudo">Estudo</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>    
  );
}; 

export default TodoForm;