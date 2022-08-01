import { createContext, useState } from 'react';
import ComponentsRoutes from './components/Routes/ComponentsRoutes';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ComponentsRoutes />
    </UserContext.Provider>
  );
}

export default App;
