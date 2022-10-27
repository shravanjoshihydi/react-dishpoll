import "./displayPage.css";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import UserVotes from "./Vote";
import Rankings from "./Rankings";
import {Link} from "react-router-dom";



const DisplayPage = () =>{
  
  const [activeTab, setActiveTab] = useState("vote");
  const [allDishes, setAllDishes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userVote, setUserVote] = useState({
    username:"", rank1:"",rank2:"",rank3:"",
  })

  // get all dishes data
  const getAllDishes = async () =>{
  try{
    const result = await axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json");
    console.log(result.data);
    setAllDishes(result.data);
    }  
    catch(error){
      alert(error);
    }
  }

  // to check user is logged in or not by checking the local storage for username/ if it is present set login status as true 
  const getUserInfo = () => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    } 
  }

  //render initial data on load 
  useEffect(()=>{
    getAllDishes();
    getUserInfo();
  },[]);

    return (
      <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {isLoggedIn?
        <div className="tabs">
          <div className="tabselect">
            <button value="vote" className="tabs" onClick={(event)=>{setActiveTab(event.target.value)}}>Vote</button>
            <button value="rankings" className="tabs" onClick={(event)=>{setActiveTab(event.target.value)}}>Rankings</button>  
          </div>
          <div className="displaypage">
            {(activeTab==="vote")?<UserVotes allDishes={allDishes} setActiveTab={setActiveTab} userVote={userVote} setUserVote={setUserVote} />:<></>}
            {(activeTab==="rankings")?<Rankings allDishes={allDishes} />:<></>}
          </div>   
        </div>
        :
        <div className="loginToContinue">
          <h1>Sorry user not recognised</h1>
          <h1>Please Login to continue...</h1>
          <div>
            <Link to="/login" >
              <button className="loginButton">
                Go to Login
              </button>
            </Link>
          </div>
        </div>}
        <Footer />
      </>
    );
}

export default DisplayPage;