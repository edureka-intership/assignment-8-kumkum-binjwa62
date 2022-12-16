const Meals = require('../Model/mealtype');


exports.getallMealType = (req, res) => {
    Meals.find()
        .then(
            result => {
                res.status(200).json({
                    message: "Data fetched Succesfully",
                    data: result
                })

            }
        )

}