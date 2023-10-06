import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import date from "date-and-time";

const app = express();
const port = 3000;


var toDoList = [];

// Get currnet date
const now = new Date();
const currentDate = date.format(now, 'dddd, MMMM D[,] YYYY');  

/***********************************************************/
/******              Middlewares                      ******/
/***********************************************************/
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

/***********************************************************/
/******             Route Handling                    ******/
/***********************************************************/
// GET: Return homepage
app.get("/", (req, res) => {
    res.render("index.ejs", {
        currentDate: currentDate
    });
});

// POST: Add new list item
app.post("/updatedList", (req, res) => {
    toDoList.push(req.body.listItem);
    
    // DEBUGGING
    console.log(toDoList);

    res.render("index.ejs", {
        currentDate: currentDate,
        toDoList : toDoList
    });
});

/***********************************************************/
/******              Start Server                     ******/
/***********************************************************/
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});