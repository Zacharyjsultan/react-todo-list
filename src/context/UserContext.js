// TODO -- create the user provider!same as from class 4childrenprop logged in user / 
import { createContext, useState } from 'react';
import { getUser } from '../services/auth';

// Call createContext to create UserContext that's passables
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };