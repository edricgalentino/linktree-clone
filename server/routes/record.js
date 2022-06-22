const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// connect to database
const dbo = require("../db/conn");
// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// ------------ make an API -------------

recordRoutes.route("/:username").get((req, res) => {
    let db_connect = dbo.getDb();
    db_connect.collection("user").findOne({ username: req.params.username }, (err, record) => {
        if (err) throw err;
        res.json(record);
    });
});

recordRoutes.route("/:username/add-link").put((req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { username: req.params.username };
    db_connect.collection("user").updateOne(
        myquery,
        {
            $push: {
                links: req.body.link,
            },
        },
        (err, record) => {
            if (err) throw err;
            db_connect.collection("user").findOne({ username: req.params.username }, (err, record) => {
                if (err) throw err;
                res.json(record);
            });
        }
    );
});

recordRoutes.route("/:username/delete-link").put((req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { username: req.params.username };
    db_connect.collection("user").updateOne(
        myquery,
        {
            $set: {
                links: req.body,
            },
        },
        (err, record) => {
            if (err) throw err;
            db_connect.collection("user").findOne({ username: req.params.username }, (err, record) => {
                if (err) throw err;
                res.json(record);
            });
        }
    );
});

module.exports = recordRoutes;
