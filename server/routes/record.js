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
// get all records
recordRoutes.route("/").get((req, res) => {
    let db_connect = dbo.getDb("employees");
    db_connect
        .collection("records")
        .find({})
        .toArray((err, records) => {
            if (err) throw err;
            res.json(records);
        });
});

recordRoutes.route("/:id").get((req, res) => {
    let db_connect = dbo.getDb();
    db_connect.collection("records").findOne({ _id: ObjectId(req.params.id) }, (err, record) => {
        if (err) throw err;
        res.json(record);
    });
});
recordRoutes.route("/add").post((req, res) => {
    let db_connect = dbo.getDb();
    let obj = {
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
    };
    db_connect.collection("records").insertOne(obj, (err, record) => {
        if (err) throw err;
        res.json(record);
    });
});
recordRoutes.route("/update/:id").put((req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").updateOne(myquery, { $set: { name: req.body.name, age: req.body.age, city: req.body.city } }, (err, record) => {
        if (err) throw err;
        res.send("1 record updated");
    });
});
recordRoutes.route("/:id").delete((req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, (err, record) => {
        if (err) throw err;
        res.send("1 record deleted");
    });
});

module.exports = recordRoutes;
