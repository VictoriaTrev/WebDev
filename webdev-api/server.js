const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("artStore"));

mongoose.connect("mongodb://mongo:27017/craftDatabase").then(() => console.log("Mongodb connected"));

// Databse Details//
const createItem = new mongoose.Schema({
    brand: String,
    material: String,
    color: String,
    dyeLot: String,
    amount: Number,
    barCode: Number,
    storageLocation: String,
    dateAdded: {type: Date, default: Date.now}
});

const item = mongoose.model("newItem", createItem);


app.listen(3000, "0.0.0.0", () => {
    console.log("Listening");
});

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/artStore/index.html");
});

app.get("/upload", (req, res)=>{
    res.sendFile(__dirname + "/artStore/upload.html");
});


app.post("/upload", (req, res) =>{
    const newItem = new item(req.body);
    newItem.save();
    res.send("Added :)");
});


//List path
app.get("/list", async (req, res) => {
    const findItem = await item.find();

    let html = "<h1>All Items: </h1>";
    
    for(let i = 0; i < findItem.length; i++){
        html += `
        <p> 
            Brand: ${findItem[i].brand}
            Material: ${findItem[i].material}
            Color: ${findItem[i].color}
            Dye Lot: ${findItem[i].dyeLot}
            Amount: ${findItem[i].amount}
            Bar Code: ${findItem[i].barCode}
            Location: ${findItem[i].storageLocation}
            Date Added: ${findItem[i].dateAdded}
        </p> 
        `;
    }

    res.send(html);
});


//Query path
/*app.get("/query", (req, res) => {
    res.sendFile(__dirname + "/artStore/query.html");
});*/

app.get("/items", async(req, res) => {
    try{
        let query = {};
        
        if(req.query.material){
            query.material = req.query.material;
        }

        const result = await item.find(query);
        res.json(result);
    }
    catch(err){
        console.log(err);
    }
    
});
