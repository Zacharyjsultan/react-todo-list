
import { useEffect } from 'react';
import { useState } from 'react';
import { getTodos } from '../services/todos';

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    getTodoList();
    
  }, []);

  return { todos, setTodos };
}
