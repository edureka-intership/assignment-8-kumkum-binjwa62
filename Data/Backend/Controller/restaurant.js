const Res = require('../Model/restaurant_data');


exports.getallRestaurant = (req, res) => {
    Res.find()
        .then(
            result => {
                res.status(200).json({
                    message: "Data fetched Succesfully",
                    data: result
                })

            }
        )

}
exports.getRestaurantByName = (req, res) => {
    let filter = {
        name: req.params.Name
    }
    Res.find(filter)
        .then(
            result => {
                res.status(200).json({
                    message: "Data fetched Succesfully",
                    data: result
                })

            }
        )

}
exports.getRestaurantByCity = (req, res) => {
 
    Res.find({city:req.params.cityID})
        .then(
            result => {
                res.status(200).json({
                    message: "Data fetched Succesfully",
                    data: result
                })

            }
        )

}

exports.getRestaurantByFilter = (req, res) => {

    let filter = {

    }

    //filter by location
    if(req.body.city_id){
        filter.city=req.body.city_id
    }

    //filter by cuisine
    if(req.body.cuisine && req.body.cuisine.length>0){
        filter['Cuisine.name']={$in:req.body.cuisine}
    }

    //filter by cost
    if(req.body.lcost && req.body.hcost){
        filter.cost={
            $lt:req.body.hcost,
            $gt:req.body.lcost
        }
    }

    // filter by high , low cost
    Res.find(filter).limit(2).skip(2 * (req.params.P_no - 1)).sort({ cost: req.body.sort })
        .then(
            result => {
                if (result.length > 0) {
                    res.status(200).json({
                        message: "Data fetched Succesfully",
                        data: result
                    })
                }
                else { res.status(500).json(("Restraunt not found")) }

            }
        )

}