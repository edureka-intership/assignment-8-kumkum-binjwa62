import React from "react";
import "../../assets/header.css"


export default function Twocards(props){
let cuisineList= props.data.Cuisine.length && <ul>{props.data.Cuisine.map(item=><li key={item.name}>{item.name}</li>)}</ul>

    return(
        <div className="filter-card">
        <div className="filtercard-upper">
        <div className="filter-image">
        <img src={props.data.thumb} alt="img"/>
        </div>

        <div className="cafe-name">   
         <h2>{props.data.name}</h2>
         <h6> {props.data.address}</h6>
        </div>
        </div>

        <div className="filtercard-lower">
        <hr/>
        <h6>Cuisine:{cuisineList}</h6>
        <h6> <b>Cost for two: {props.data.cost}</b></h6>
        </div>
        </div>
   
    )
}