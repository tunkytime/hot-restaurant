var tableData = require("../data/tableData");
var waitlist = require("../data/waitlist");

module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        res.json(tableData);
    });

    app.post("/api/tables", function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitlist.push(req.body);
            res.json(false);
        };
    });
};