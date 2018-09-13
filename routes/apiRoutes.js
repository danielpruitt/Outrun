var db = require("../models");

module.exports = function (app) {
    //========================================================//
    //routing for the beer Table

    //find all beers, API
    app.get("/api/beers", function (req, res) {
        var query = {};
        if (req.query.person_id) {
            query.PersonId = req.query.person_id;
        };
        db.Beer.findAll({
            where: query
        }).then(function (dbBeer) {
            res.json(dbBeer);
        });
    });

    //find a single beer, API
    app.get("/api/beers/:id", function (req, res) {
        db.Beer.findOne({
            where: {
                id: req.params.id
            },
        }).then(function (dbBeer) {
            res.json(dbBeer)
        });
    });

    //create new beer
    app.post("/api/beers", function (req, res) {
        db.Beer.create(req.body).then(function (dbBeer) {
            res.json(dbBeer);
        });
    });

    //update a beer
    app.put("/api/beers/:id", function (req, res) {
        db.Beer.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbBeer) {
                res.json(dbBeer);
            });
    });

    //delete a beer
    app.delete("/api/beers/:id", function (req, res) {
        db.Beer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBeer) {
            res.json(dbBeer);
        });
    });
};