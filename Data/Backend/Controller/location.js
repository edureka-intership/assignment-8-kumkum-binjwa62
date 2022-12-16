const Res = require('../Model/location');


exports.getallLocation = (req, res) => {
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
exports.getLocationByName = (req, res) => {
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