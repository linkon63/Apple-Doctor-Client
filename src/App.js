import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import OrderService from './components/OrderService/OrderService/OrderService';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Home/Services/Services/Services';
import YourServiceOrder from './components/Dashboard/YourServiceOrder/YourServiceOrder';
import AddReview from './components/Dashboard/AddReview/AddReview/AddReview';
import Admin from './components/Dashboard/Admin/Admin/Admin';
import AllOrders from './components/Dashboard/AllOrders/AllOrders/AllOrders';
import AddServices from './components/Dashboard/AddServices/AddServices/AddServices';
import ManageReview from './components/Dashboard/ManageReview/ManageReview/ManageReview';
import ManageContact from './components/Dashboard/ManageContact/ManageContact';
import Navber from './components/Sheared/Navber/Navber/Navber';
import Footer from './components/Sheared/Footer/Footer/Footer';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Navber></Navber>
            <div className="container text-center mt-5 mb-5">
              <h1>Welcome to Blog</h1>
              <h1>This Page Under Building Goto DashBoard Or Login</h1>
            </div>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/orderService/:id">
            <OrderService></OrderService>
          </PrivateRoute>
          <Route path="/ourTeam">
            <Navber></Navber>
            <div className="container text-center mt-5 mb-5">
              <h1>Welcome to Team</h1>
              <h1>This Page Under Building Goto DashBoard Or Login</h1>
            </div>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/services">
            <YourServiceOrder></YourServiceOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageReview">
            <ManageReview></ManageReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addServices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allOrders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/showContactUsData">
            <ManageContact></ManageContact>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
