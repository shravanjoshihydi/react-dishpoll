import React from "react";
import {Link} from "react-router-dom";
import "./header.css"

const Header = (props) => {

  // function to handle logout operation
  const logout = () => {
    localStorage.removeItem("username");
    // localStorage.clear();
    props.setIsLoggedIn(false)
    window.location.reload();
    console.log("Successfully logged out");
  }

  return (
    <div className="header">
        <div className="header-title">
            <h2>Syook Dish Poll</h2>
        </div>
        {props.isLoggedIn?
            <div className="login">
              <div className="user">Hello {localStorage.username}!</div>
              <button onClick={logout}>
                Logout
              </button>
            </div>
            :
            <div>
                <Link to="/login" className="link">
                  <button>
                    Login
                  </button>
                </Link>
           </div>
        }
      </div>
    );
};

export default Header;
