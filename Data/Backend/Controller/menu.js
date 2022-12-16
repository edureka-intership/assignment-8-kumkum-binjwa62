const Menu = require('../Model/menu');


exports.getallMenuData = (req, res) => {
    rName=req.params.rName;
    Menu.find({restaurantName:rName})
        .then(
            result => {
                res.status(200).json({
                    message: "Menu fetched Succesfully",
                    data: result
                })

            }
        )

}