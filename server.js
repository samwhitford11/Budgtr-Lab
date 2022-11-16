const { response } = require('express');
const express = require('express');
const app = express();
const Budget = require("./Models/budget")


const PORT = 3019

app.use(express.static(__dirname + '/public')); 

//INDEX ROUTE
app.get("/budgets", (req, res) => {
    res.render('budget_index.ejs', 
    {
        Budget: Budget
    });
});

//SHOW ROUTE
app.get("/budgets/:index", (req, res) => {
    res.render('budget_show.ejs',
    {
        Budget: Budget[req.params.index],
        index: req.params.index

    });
});
















app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});