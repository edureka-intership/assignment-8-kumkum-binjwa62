import React, { Component } from "react";
import "../assets/header.css"
import Mealtype from "./Mealtype"


export default class Cards extends Component {

    constructor() {
        super();
        this.state = {
            mealtype: []
        }
    }

    componentDidMount() {

        fetch("http://localhost:9999/Mealtype", { method: 'GET' })
            .then(response => response.json())
            .then(data => this.setState({ mealtype: data.data }))
    }
    render() {
        let MealtypeList= this.state.mealtype.length && this.state.mealtype.map(item=><Mealtype key={item.name} item={item}></Mealtype>)
        return  <>
        <div className="container ">
            <div className="row heading blue">
                <h2 style={{color: "#192F60" , paddingTop:"10px"}}> <b> Quick Searches</b></h2>
                <h4 style={{paddingBottom:"20px"}}> Discover restraunt by type of meal </h4>
            </div>
            </div>
            <div className="container-fluid center justifu-content-center">
            <div className="row">

            <div className="display-flex1"> {MealtypeList}</div>
            </div>
            </div>
            </>
            
    }
}


/* <div classNameName="container-fluid main"> */ 
/* <div classNameName="container card-area">
                     <div className="row" style={{ fontSize: "30", color:"#192F60", fontWeight:"900" }}>Quick searches</div> 
                    <div className="row" style={{color: "#8C96AB"}}>Discover restaurants by meals</div> <br/>
                    <div className="row display-f">
                        <div className=" row cards">
                            <div className="col-md-6">
                                <img src="Images/breakfast.jpg" alt="" />
                            </div>
                            <div className="col-md-6 card-texts">
                                <div style={{fontSize: "20px"}}>Breakfast</div>
                                <p style={{fontSize: "14px"}}> start your day with exclusive breakfast option</p> 
                            </div>
                            </div>
                 
                    </div>
                </div>*/