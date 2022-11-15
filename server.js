const { response } = require('express');
const express = require('express');
const app = express();
const budget = require("./Models/budget")

const PORT = 3019


app.get("/", (req, res) => {
    res.send("Hello Wolrd")
});

















app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});