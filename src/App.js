import { createContext, useEffect, useState } from 'react';
import ComponentsRoutes from './components/Routes/ComponentsRoutes';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    try {
      console.log("Set cookie from Cookies")
      const userInfo = JSON.parse(getCookie('userInfo'))
      if (userInfo) {
        setLoggedInUser(userInfo)
      }
      else {
        console.log("There is no Cookies")
      }
    } catch (error) {
      console.log("Error get Cookie")
    }
  }, [])

  // window.onload = (event) => {
  //   console.log('page is fully loaded');
  //   try {
  //     console.log("Set cookie from Cookies")
  //     const userInfo = JSON.parse(getCookie('userInfo'))
  //     if (userInfo) {
  //       setLoggedInUser(userInfo)
  //     }
  //     else {
  //       console.log("There is no Cookies")
  //     }
  //   } catch (error) {
  //     console.log("Error get Cookie")
  //   }
  // };

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ComponentsRoutes />
    </UserContext.Provider>
  );
}

export default App;
