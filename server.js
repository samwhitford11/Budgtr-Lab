const { response } = require('express');
const express = require('express');
const app = express();
const Budget = require("./Models/budget")

const PORT = 3019


app.get("/", (req, res) => {
    res.render('budget_index.ejs', 
    {
        Budget: Budget
    })
});

















app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});