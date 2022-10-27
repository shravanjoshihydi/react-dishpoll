import React from "react";
import "./dishCard.css"

const DishCard =(props)=>{
    return (
        <div className="dishCard content">
            {/* <div className="dishImageDiv"> */}
                {/* <img className="dishImage" src={props.dish.image} alt={props.dish.dishName} width="100%" height="100%" /> */}
            {/* </div> */}
            <div className="title">
                <h3>Dish Name: {props.dish.dishName}</h3>
            </div>
            <div className="data">
                <div className="dishData">
                    Description:
                    <h5>{props.dish.description}</h5><br/>
                </div>
                <h5>Please give your rank:</h5>
                <div className="dishRating"> 
                    <button className="dishRank" id="noRank" onClick={()=>{
                        if(props.rankOne.id === props.dish.id) props.setRankOne({id:0, dishName:"", rank:1, points:30,});
                        if(props.rankTwo.id === props.dish.id) props.setRankTwo({id:0, dishName:"", rank:2, points:20,});
                        if(props.rankThree.id === props.dish.id) props.setRankThree({id:0, dishName:"", rank:3, points:10,});
                    }}>No Rank</button>
                    <button className="dishRank" onClick={()=>{
                        if(props.rankTwo.id===props.dish.id){
                            props.setRankTwo({id:0, dishName:"", rank:2, points:20,});
                        }
                        if(props.rankThree.id===props.dish.id){
                            props.setRankThree({id:0, dishName:"", rank:3, points:10,});
                        }
                        props.setRankOne({id:props.dish.id, dishName:props.dish.dishName, rank:1, points:30,});
                    }}>1</button>
                    <button className="dishRank" onClick={()=>{
                        if(props.rankOne.id===props.dish.id){
                            props.setRankOne({id:0, dishName:"", rank:1, points:30,});
                        }
                        if(props.rankThree.id===props.dish.id){
                            props.setRankThree({id:0, dishName:"", rank:3, points:10,});
                        }
                        props.setRankTwo({id:props.dish.id, dishName:props.dish.dishName, rank:2, points:20,});//
                    }}>2</button>
                    <button className="dishRank" onClick={()=>{
                        if(props.rankTwo.id===props.dish.id){
                            props.setRankTwo({id:0, dishName:"", rank:2, points:20,});
                        }
                        if(props.rankOne.id===props.dish.id){
                            props.setRankOne({id:0, dishName:"", rank:1, points:30,});
                        }
                        props.setRankThree({id:props.dish.id, dishName:props.dish.dishName, rank:3, points:10,});//
                    }}>3</button>
                </div>
            </div>
        </div>
    );
}

export default DishCard;