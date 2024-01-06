import { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.response);
      });
  }, [todos]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-md shadow-md">
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
