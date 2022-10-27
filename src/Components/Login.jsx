import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";


const Login =()=>{

  const allUsers = require("./users.json");

  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "", password: ""
  });
  
  // handle input values
  const handleInput = (event) =>{
    const [key, value] = [event.target.name, event.target.value];
    setFormData((nextFormData)=>({...nextFormData, [key]:value}))
  }

  //get user login data and check if data is correct, if true push to Vote page. if not, alert error acccordingly.
  const UserLogin=(event)=>{
    event.preventDefault();
    console.log("Login request");
    const [user] =  allUsers.filter(item => item.username === formData.username);
    if(user){
      if(user.password === formData.password){
        persistLogin(formData.username);
        setFormData({username: "", password: ""});
        console.log("Successfully logged in");
        history.push("/");
      }
      else{
        alert("Incorrect password.");
      }
    } else{
      alert("User not found. Enter correct Username.");
    }
  }

  //to set username in localstorage to check for login/logout status.  
  const persistLogin = (username) =>{
    localStorage.setItem("username",username);
  };
  
  
  return (
    <>
      <Header />
      <div className="loginBox">
        <form onSubmit={UserLogin}>  
          <div class="loginContainer">   
          <h2>Please login here</h2>
            <div className="loginContents">
              <label>Username : </label>   
              <input 
              type="text" 
              name="username"
              placeholder="Enter Username" 
              value={formData.username} 
              onChange={handleInput} 
              required 
              />  
            </div>
            <div className="loginContents">
              <label>Password : </label>   
              <input 
              type="password" 
              placeholder="Enter Password" 
              name="password"
              value={formData.password} 
              onChange={handleInput} 
              required />  
            </div>
            <div className="loginContents">
              <button type="submit">Login</button>
            </div>
          </div>   
        </form>    
      </div>
      <Footer />
    </>
  );
}

export default Login;