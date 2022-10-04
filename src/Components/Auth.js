import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { authUser } from '../services/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  const clickHandler = async () => {
    const userAuth = await authUser(email, password, type);
    setUser(userAuth);
    setEmail('');
    setPassword('');
  };

  if (user) {
    return <Redirect to="/tasks" />;
  }

  return (
    <>

      <div className="user-sign-in">
        <label>Email=</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="user-sign-in">
        <label>Password=</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={clickHandler}>Click</button>
    </>
  );
}
