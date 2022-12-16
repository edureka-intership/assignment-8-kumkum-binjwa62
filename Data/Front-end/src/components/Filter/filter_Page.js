import { useEffect } from "react";
import React, { useState } from "react";
import "../../assets/header.css";
import Twocards from "./search";
import Headtop from "../head-top";
import { Link } from "react-router-dom";



export default function Filter() {

    const[currentpage,setCurrentpage]=useState(2)

  
     const [restaurant, setrestaurant] = useState([]);
    const [filter, setFilter] = useState({
        sort:1,
        cuisine:[],
        city_id:'',
        lcost:'',
        hcost:'',
    });
    let ResData= restaurant.length && restaurant.map(item=><Twocards key={item.name} data={item}></Twocards>)
    useEffect(() => {
      
        fetch(`http://localhost:9999/Restaurants/Filter/${currentpage}`,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(filter)
        })
        .then(response=>response.json())
        .then(data=>setrestaurant(data.data))
    },[filter,currentpage])


    const handelSort=(sort)=>{
        filter.sort=sort
        setFilter({...filter})
    }

    const handleCuisine=(e)=>{
        if(e.target.checked){
            filter.cuisine.push(e.target.value)
        }
        else{
            let index=filter.cuisine.indexOf(e.target.value)
            if(index>-1){
                filter.cuisine.splice(index,1)
                    }
            }
            setFilter({...filter})
            console.log(filter)
    }         

    const handleCost=(lcost,hcost)=>{
        filter.lcost=lcost
        filter.hcost=hcost
        setFilter({...filter})
        console.log(filter)
    }

    
    return (
    // console.log(restaurant)
        
        <div>
              <div>
              <Headtop/>
            </div>
            <div className="filter-card-left">
            <br/>
                <div className="main-heading" style={{color:"#192F60"}}>
                    Breakfast Places in Mumbai
                </div><br />
                <div className="center-body">
                    <div className="card">
                        <h2> FILTERS </h2>
                        <form>
                            {/* <label> Select Location</label><br /> */}
                            <select>
                                <option default >Select Location</option>
                                <option> ram nagar</option>
                                <option> august kranti marg</option>
                                <option> juhu chopati </option>
                                <option> service road </option>
                            </select>
                            <br/><br/>
                            <h3>Cuisine</h3>
                            <input type="checkbox" value='North Indian' onChange={(e)=>handleCuisine(e)}/> North Indian <br />
                            <input type="checkbox" value='South Indian' onChange={(e)=>handleCuisine(e)}/> South Indian <br />
                            <input type="checkbox" value='Chinese' onChange={(e)=>handleCuisine(e)}/> Chinese <br />
                            <input type="checkbox" value='Fast Food' onChange={(e)=>handleCuisine(e)}/> Fast Food <br />
                            <input type="checkbox" value='Street Food' onChange={(e)=>handleCuisine(e)}/> Street Food <br />
                            <br />

                            <h3>Cost For Two </h3> 
                            <input type="radio" name="cost"  onChange={()=>handleCost(0,300)}/> Less than '100 <br />
                            <input type="radio" name="cost" onChange={()=>handleCost(300,400)}/> '100 to '200 <br />
                            <input type="radio" name="cost" onChange={()=>handleCost(200,300)}/> '200 to '300 <br />
                            <input type="radio" name="cost" onChange={()=>handleCost(300,400)}/> '300 t0 '400 <br />
                            <input type="radio" name="cost" onChange={()=>handleCost(400,500)}/> '500+  <br/><br/>

                            <h3> SORT</h3>
                            <input type="radio" name="radio2" checked={filter.sort==1} onChange={()=>handelSort(1)}/> Price low to high <br />
                            <input type="radio" name="radio2"  onChange={()=>handelSort(-1)}/> price high to low <br />
                        </form>
                    </div>

                <div className="right-card-div">
                    {ResData}
                </div>

                </div>

                <div className="pagination">
                  
                    <button onClick={()=>setCurrentpage(1)}>1</button>
                    <button onClick={()=>setCurrentpage(2)}>2</button>
                    <button onClick={()=>setCurrentpage(3)}>3</button>
                    <button onClick={()=>setCurrentpage(4)}>4</button>
                    <button onClick={()=>setCurrentpage(5)}>5</button>
               
                </div>
            </div>
        </div>
    )
}
