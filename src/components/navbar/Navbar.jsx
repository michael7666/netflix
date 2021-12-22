import "./navbar.scss";
import {Search, Notifications, ArrowDropDown} from "@material-ui/icons";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useHistory } from "react-router";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);
    const history = useHistory();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll ===null);
    }

  const handleLogout = () =>{
      dispatch(logout());
      history.push("/login");
  }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                     alt=""
                      />
                      <Link to="/" className="link">
                      <span>Homepage</span>
                      </Link>
                      <Link to="/series" className="link">
                      <span className="navbarminlist">Series</span>
                      </Link>
                      <Link to="/movies" className="link">
                      <span className="navbarminlist">Movies</span>
                      </Link>
                     <Link to="/new" className="link">
                     <span>New and Popular</span>
                     </Link>
                     <Link to="/list" className="link">
                     <span>My List</span>
                     </Link>
             
                </div>
                <div className="right">
                    <Search className="icons" />
                    <span>KID</span>
                    <Notifications className="icons"/>
                    <img src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                     <div className="profile">
                     <ArrowDropDown className="icons"/>
                     <Link to="/settes" className="link">
                     <div className="options">
                         <span>Settings</span>
                         <span onClick={handleLogout}>Logout</span>
                     </div>
                     </Link>
                     </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
