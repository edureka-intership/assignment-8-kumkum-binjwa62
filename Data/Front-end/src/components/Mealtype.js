import React from "react";

function Mealtype(props){
    return(
                <div className="row  ak-card ">
                    <div className="col-md-5">
                        <img src={require(`../${props.item.image}`)} height="150px" width="160px" alt="img"/>
                    </div>
                    <div className="col-md-6">
                        <h2>{props.item.name}</h2> <hr></hr>
                        <h6>{props.item.content}</h6>

                    </div>
                </div>



        // <div className="mainn-card float-right ">
        // <div className="card-body col-md-4 ">
        //     <div className="card " >
        //         <div className="row ">
        //             <div className="col-md-5">
        //                 <img src="..." className="img-fluid rounded-start" alt="..." />
        //             </div>
        //             <div className="col-md-7">
        //                 <div className="card-body">
        //                     <h5 className="card-title">Card title</h5>
        //                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
    )
}

export default Mealtype;