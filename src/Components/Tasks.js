import React, { useState } from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import useTodos from '../hook/useTodos';
import { signOut } from '../services/auth';
import { userTodo } from '../services/todos';


export default function Tasks() {
  
  const { user, setUser } = useContext(UserContext);

  const { todos, setTodos } = useTodos();
  const [description, setDescription] = useState('');

  if (!user) return <Redirect to="/auth/sign-in" />;

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    // eslint-disable-next-line no-empty
    } catch (e) {
    }
  };

  const handleNewTodo = async () => {
    const addTodo = await userTodo(description); 
    setTodos((pastTodos) => [...pastTodos, addTodo]);
    setDescription('');
  };

  return (
    <>
      <div>
        <h3> {`Howdy, ${user.email}`} </h3>
        <button onClick={handleSignOut}>SIGN OUT</button>
      </div>  
      <div>
        <h2>
          TASKS
        </h2>
        <h3> To Dos</h3>
        <input type='text' placeholder='todo?' value={description} onChange={(e) => { setDescription(e.target.value);
        }} ></input>
        <button onClick={handleNewTodo}>Something To Do</button>
      </div>
     

    </>
  );
}
