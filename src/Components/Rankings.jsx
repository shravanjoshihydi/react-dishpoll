import { useEffect, useState } from "react";
import "./ranking.css"


const allUsers = require("../users.json");

const Rankings = () =>{

    const [finalDishes, setFinalDishes] = useState([]);
    
    
    const getAllData = () =>{
        const allData = allUsers.map(item =>{
            return JSON.parse(localStorage.getItem(item.username));
        }).filter(item => item!==null);
        return allData;
    }

    
    const setDataForLeaderboard = () =>{
        const allData=getAllData();
        let finalArray=[];
        for(let i=0;i<allData.length;i++){
            for(let j=0;j<allData[i].length;j++){
                finalArray.push(allData[i][j]);
            }
        }
        const result=finalRankings(finalArray)
        setFinalDishes(result);
    }
    
    
    const finalRankings = (finalArray) =>{
        let result = [];
        finalArray.reduce(function(res, value) {
            if (!res[value.id]) {
              res[value.id] = { id: value.id,dishName:value.dishName, points: 0 };
              result.push(res[value.id])
            }
            res[value.id].points += value.points;
            return res;
          }, {});
        result.sort(function(a,b){
            return b.points-a.points;
        });
        return result;
    }


    useEffect(()=>{ 
        setDataForLeaderboard();
        // eslint-disable-next-line
    },[])
    
    
    const getYourRankings = () =>{
        const user = localStorage.getItem("username");
        // console.log(user);
        const rankings = JSON.parse(localStorage.getItem(user));
        console.log(rankings);
        if(!rankings){
            return []; 
        }
        return rankings;
    }

    const userRankings= getYourRankings();


    const TableHeading = () =>{
        return (
            <li className="list-item">
                <form className="grid-item">
                    <div className="grid-element heading" id="checkbox" >
                        Rank
                    </div>
                    <div className="grid-element heading" id="name">
                        Dish Id
                    </div>
                    <div className="grid-element heading" id="name">
                        Dish Name
                    </div>
                    <div className="grid-element heading" id="email">
                        Total Points
                    </div>
                    <div className="grid-element heading"  id="role">
                        Your Rank
                    </div>  
                </form>                        
            </li>
        )
    }
    


    const DisplayEachRow = (props) =>{
    
        const idsArray = () =>{
            let idsArray = [];
            for(let i=0;i<props.userRankings.length;i++){
                idsArray.push(props.userRankings[i].id);
            }
            return idsArray;
        } 
    
        const yourRankExists =() =>{
            const ids = idsArray();
            if(ids.includes(props.dishes.id)){
                const index = ids.indexOf(props.dishes.id)
                return props.userRankings[index].rank;
            }
            return "No Rank";
        } 

        return (
            <li className="list-item">
            <form className="grid-item">
                <div className="grid-element" id="checkbox" >
                    {props.index+1}
                </div>
                <div className="grid-element" id="name">
                    {props.dishes.id}
                </div>
                <div className="grid-element" id="name">
                    {props.dishes.dishName}
                </div>
                <div className="grid-element" id="email">
                    {props.dishes.points}
                </div>
                <div className="grid-element"  id="role">
                    {yourRankExists()}
                </div>  
            </form>                        
        </li>
        );
    }

    return (
        <div>
            <h1 id="leaderboard">All Rankings Leaderboard</h1>
            <TableHeading />
            {finalDishes.map((dishes, index)=>{
                return <DisplayEachRow index={index} dishes={dishes} userRankings={userRankings} />
            })}
        </div>
    );
}

export default Rankings;