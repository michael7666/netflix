import Login from "./pages/login/Login";
import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import  Home from "./pages/home/Home"
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import MovieList from "./pages/listList/MovieList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";


function App() {
  const {user} = useContext(AuthContext);
 
  return (
    <Router>
     <Switch>
     <Route  path="/login">
       {user ? <Redirect to="/"/> :
        <Login/>
        }
        {/* <Login/> */}
        </Route>
        {user &&
        <>
     <Topbar/>
      <div className="container">
      <Sidebar/>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/users">
          <UserList/>
          </Route>
          <Route path="/user/:userId">
          <User/>
          </Route>
          <Route path="/newUser">
          <NewUser/>
          </Route>
          <Route path="/movies">
          <ProductList/>
          </Route>
          <Route path="/product/:productId">
          <Product/>
          </Route>
          <Route path="/newProduct">
          <NewProduct/>
          </Route>
          <Route path="/lists">
          <MovieList/>
          </Route>
          <Route path="/list/:listId">
          <List/>
          </Route>
          <Route path="/newlist">
          <NewList/>
          </Route>
        </div>
          </>}
      </Switch>
    </Router>
  );
}

export default App;
