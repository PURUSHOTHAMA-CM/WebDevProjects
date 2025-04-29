// import requirements

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";



const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

// access static files;
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

// getting global market data

app.post("/get-marketdata", async(req,res)=>{
    try{
        const response=await axios.get("https://api.coinlore.net/api/global");
        res.render("index.ejs",{Marketinfo:response.data});
    }
    catch(error)
    {
        res.status(404).send("file not found");
    }
});

// getting rankwise market data

app.post("/get-cryptodata", async(req,res)=>{
    try{
        const start=req.body.start-1;
        const limit=req.body.limit;
        console.log(start+" "+limit);
        const URL="https://api.coinlore.net/api/tickers/?start="+start+"&limit="+limit;
        const response=await axios.get(URL);
        res.render("index.ejs",{allCoinInfo:response.data});
    }
    catch(error)
    {
        res.status(404).send("file not found");
    }
});

// getting data of particular coin using its symbol

app.post("/get-byname",async (req,res)=>{

    try{
        const symbol=req.body.cName;
    
    const response =await axios.get(`https://api.blockchain.com/v3/exchange/tickers/${symbol}`);

    res.render("index.ejs",{singleCoinInfo:response.data});
    }
    catch(error)
    {
        res.status(404).send("file not found");
    }
});

// loading about and contact
    app.get("/about",(req,res)=>{
        res.render("about.ejs");
    });

    app.get("/contact",(req,res)=>{
        res.render("contact.ejs");
    });


// listning to port


app.listen(port,()=>{
    console.log(`listning to port ${port}`);
});