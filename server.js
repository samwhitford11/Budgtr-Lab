const { response, urlencoded } = require('express');
const express = require('express');
const app = express();
const Budget = require("./Models/budget")


const PORT = 3019

app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded ({extended: true}));

//INDEX ROUTE
app.get("/budgets", (req, res) => {
    res.render('budget_index.ejs', 
    {
        Budget: Budget,
        total: Budget.reduce((accumulator, currentValue) => {
            return accumulator + parseInt(currentValue.amount);
        },0)
    
    });
});
// Total Amount style
// {/* <style>
//     {/* if (total < 0) {} */}
//     .total{
//         background-color: red;
//     }
// </style> */}
//NEW ROUTE
app.get('/budgets/new', (req, res) => {
    res.render('budget_new.ejs');
});

//Create Route
app.post('/budgets', (req, res) => {
    req.body=(req.body)

    Budget.push(req.body)
    console.log(req.body)

    res.redirect("/budgets")
})

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