import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import date from "date-and-time";
import pg from "pg";

const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client({
    user: "postgres", 
    host: "localhost", 
    database: "to-do-list", 
    password: "!CryoGoat122",
    port: 5432,
});
db.connect();

// Old code
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
// GET Return homepage
app.get("/", async(req, res) => {
    try {
        const result = await db.query("SELECT * FROM items");
        const data = result.rows;
        console.log(data);
        res.render("index.ejs", {
            currentDate: currentDate, 
            toDoList: data
        });
    } catch (error) {
        console.log(error);
    }
});

// ADD new list item
app.post("/updatedList", async(req, res) => {
    try {
        const itemTitle = req.body.itemTitle;
        await db.query("INSERT INTO items(title) VALUES($1)", 
            [itemTitle]
        );
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

// EDIT item
app.post("/edit", async(req, res) => {
    try {
        const itemID = req.body.itemId;
        const itemTitle  = req.body.updatedTitle;

        await db.query(
            "UPDATE items SET title = $1 WHERE id = $2", 
            [itemTitle, itemID]
        );
        res.redirect("/");
    } catch (error) {
        console.log(error)
    }
});

// DELETE Task
app.post("/delete", async(req, res) => {
    try {
        const itemID = req.body.itemId;

        await db.query(
            "DELETE FROM items WHERE id = $1", 
            [itemID]
        );
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

// CLEAR all items
app.post("/clearList", (req, res) => {
    try {
        db.query("DELETE FROM items");
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

/***********************************************************/
/******              Start Server                     ******/
/***********************************************************/
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});