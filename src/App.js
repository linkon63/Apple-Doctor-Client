import { createContext, useState } from 'react';
import Routes from './components/routes/Routes';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Routes />
    </UserContext.Provider>
  );
}

export default App;
