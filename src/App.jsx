
import "./app.scss";
 import Login from "./container/login/Login";
import Home from "./container/home/Home";
 import Watched from "./container/watch/Watched";
 import Register from "./container/register/Register";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Setters from "./container/settes/Setters";


const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Router> 
        <Switch>
          <Route exact path="/">
            {user ? <Home/> : <Redirect to="/register"/>}
          </Route>
          <Route path="/register">
          {!user ? <Register/> : <Redirect to="/"/>}
          </Route>
          <Route path="/login">
          {!user ?  <Login/> : <Redirect to="/"/>}
          </Route>
          { user && (
            <>
            <Route  path="/movies">
            <Home type="movie"/>
          </Route>
          <Route  path="/series">
            <Home type="serie" />
          </Route>
          <Route path="/watched">
            <Watched/>
          </Route>
          <Route path="/settes">
            <Setters/>
          </Route>
            </>
          )

          }
        </Switch>
      </Router>
    </div>
  )
}

export default App;
