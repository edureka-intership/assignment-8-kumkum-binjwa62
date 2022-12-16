import React from "react";
import "../assets/header.css";
import {Link} from "react-router-dom";
// import Backgrounds from "./Images/background.png"



export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            location: [],
            restaurant: []
        }
    }

    componentDidMount() {

        fetch("http://localhost:9999/Location", { method: 'GET' })
            .then(response => response.json())
            .then(data => this.setState({ location: data.data }))
    }

    fetchRestaurants = (event) => {
        fetch(`http://localhost:9999/Restaurants/city/${event.target.value}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => this.setState({ restaurant: data.data }))
    }

 

    render() {

        let locationOption = this.state.location.length && this.state.location.map(item => <option style={{ cursor: "pointer" }} key={item.name} value={item.city_id}>{item.name}</option>)
        let restaurantOption = this.state.restaurant.length && <ul className="uls">{this.state.restaurant.map(item => <li className="Restaurant-list"  key={item.name}><Link to={`/details/${item.name}`}>{item.name}</Link></li>)}</ul>
        return <> <header className="banner">

        </header>
            <div className="">
                <div className="row">
                    <div className="col-md-12">

                    </div>
                </div>
                <div className="row  button-row">
                    <div className="col-md-12">
                        <div className="buttons">
                            <button className="button1">Login</button>
                            <button className="button2">Create an Account</button>
                        </div>

                    </div>
                </div>
                <div className="row e-div w-100">
                    <center>

                        <div className="col-sm-12 justify-content-center">
                            <div className="e rounded-circle text-center">
                                e!
                            </div>
                        </div>
                    </center>
                </div>
                <div className="row banner-text center">
                    <div className="col-md-12 center">
                        <div className="wd-100 poppinsb size-36">
                            Find the best restaurants,cafe's,and bars
                        </div>
                    </div>
                </div>
                <div className="row form-row center">
                    <div className="col-md-12">
                        <select className="input" onChange={this.fetchRestaurants} >
                            <option disabled selected>Select Location</option>
                            {locationOption}
                        </select>
                        <input className="input-2" type="text" placeholder="  Search for restaurants" />
                        {restaurantOption}
                    </div>
                </div>
            </div>
 
        </>
    }
}