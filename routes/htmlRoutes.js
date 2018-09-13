var db = require("../models");

module.exports = function(app) {
    //load the index page
    app.get("/", function (req, res) {
        db.Beer.findAll({}).then(function (dbBeer) {
                return res.render("index", {
                    Beer: dbBeer
                });
            });
        });
};