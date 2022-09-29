import React from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { signOut } from '../services/auth';

export default function Tasks() {
  
  const { user, setUser } = useContext(UserContext);

  if (!user) return <Redirect to="/auth/sign-in" />;

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    // eslint-disable-next-line no-empty
    } catch (e) {
    }
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
        <h3> To-Dos</h3>
      </div>

    </>
  );
}
