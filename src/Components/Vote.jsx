//tab to show user requirements and options to select top 3 dishes of user
import DishCard from "./dishCard"
import { useState } from "react";
import "./Vote.css"

const UserVotes = (props) =>{

    const user = localStorage.getItem("username");
    
    const [rankOne, setRankOne] = useState({
        id:0, dishName:"", rank:1, points:30,
    });
    const [rankTwo, setRankTwo] = useState({
        id:0, dishName:"", rank:2, points:20,
    });
    const [rankThree, setRankThree] = useState({
        id:0, dishName:"", rank:3, points:10,
    });
    
    //component for setting ranking card for each rating
    const RankingCard = ({card}) =>{
        return (
        <div className="RankingCardContents">
            <h5>Rank: {card.rank}</h5>
            <h5>Dish Name: {card.dishName}</h5>
            <h5>Points: {card.points}</h5>
        </div>
        );
    }

    //function to handle submit button
    const handleSubmit = () =>{
        // alert("ThankYou for submitting your rating");
        localStorage.setItem(`${user}`,JSON.stringify([rankOne,rankTwo,rankThree]));
        setRankOne({id:0, dishName:"", rank:1, points:30,});
        setRankTwo({id:0, dishName:"", rank:2, points:20,});
        setRankThree({id:0, dishName:"", rank:3, points:10,});
        props.setActiveTab("rankings");
        console.log(localStorage);
    }

    return (
        <>
        <div className="selectDishes">
            <h1>Please select your Top 3 dishes</h1>
            <div className="rankingCards">
            {rankOne.id!==0?
            <div className="rankingCard">
                <RankingCard card={rankOne} />
            </div>
            :<></>}
            {rankTwo.id!==0?
            <div className="rankingCard">
                <RankingCard card={rankTwo} />
            </div>
            :<></>}
            {rankThree.id!==0?
            <div className="rankingCard">
                <RankingCard card={rankThree} />
            </div>
            :<></>}
            </div>
            {rankOne.id!==0 && rankTwo.id!==0 && rankThree.id!==0 && <div className="top3submit"><button onClick={()=>{handleSubmit()}}>Submit</button></div>}
        </div>
            <div className="gridContainer">
                {props.allDishes.map((dish)=>{
                    return (
                        <div className="card">
                            <DishCard 
                            dish={dish}
                            rankOne={rankOne}
                            rankTwo={rankTwo}
                            rankThree={rankThree}
                            setRankOne={setRankOne}
                            setRankTwo={setRankTwo}
                            setRankThree={setRankThree}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default UserVotes;