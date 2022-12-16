import  {useEffect} from "react";
import  {useState} from "react";
import Headtop from "../head-top";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useParams} from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import { Modal } from "bootstrap";


// Modal.setAppElement('#yourAppElement');

function Restdetail(){
  let {rName}=useParams();
  const [restaurant, setRestaurant]= useState({ })
  

  useEffect(() => {

    fetch(`http://localhost:9999/Restaurants/${rName}`, { method: 'GET' })
    .then(response=>response.json())
    .then(data=> setRestaurant(data.data[0]))

  }, )
  
  // console.log(Restaurant)

    // const[name,thumb]=restaurant;
    let CuisineList= !(restaurant.Cuisine===undefined) && restaurant.Cuisine.length && <ul>{restaurant.Cuisine.map(item=><li key={item.name}>{item.name}</li>)}</ul>
    return(

        <>
        
        <Headtop/>
        <div>
            <img src={restaurant.thumb} alt="img" width="100%" height="300px"/>
        </div>
        <div>
        <div style={{display:"inline-block"}}>
      <h2><b>{restaurant.name}</b></h2>

      <button className="btn btn-danger" style={{float:"right"}}>
        Menu
      </button>
        
        </div>
        <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Contact </Tab>
    </TabList>
    <TabPanel>
      <h5> about the place</h5>
      <h5> {CuisineList}</h5>
      <h4> average cost:{restaurant.cost}</h4>
    </TabPanel>
    <TabPanel>
      <h4>contact: 91+8959911787</h4>
      <h4>{restaurant.address}</h4>
    </TabPanel>
    </Tabs>
        </div>
        </>
    )
}

export default Restdetail;