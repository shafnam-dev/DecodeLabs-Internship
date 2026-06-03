const express = require("express");

const app = express();

const PORT = 3000;


/* MIDDLEWARE */

app.use(express.json());


/* SAMPLE DATA */

let coffeeMenu = [

  {
    id:1,
    name:"Latte",
    price:150
  },

  {
    id:2,
    name:"Espresso",
    price:120
  }

];


/* HOME ROUTE */

app.get("/", (req,res)=>{

  res.send("Coffee API Running");

});


/* GET ALL COFFEE */

app.get("/coffee",(req,res)=>{

  res.json(coffeeMenu);

});


/* POST NEW COFFEE */

app.post("/coffee",(req,res)=>{

  const {name,price} = req.body;


  /* VALIDATION */

  if(!name || !price){

    return res.status(400).json({

      message:"Please provide name and price"

    });

  }


  const newCoffee = {

    id:coffeeMenu.length + 1,
    name,
    price

  };


  coffeeMenu.push(newCoffee);

  res.status(201).json({

    message:"Coffee added successfully",

    data:newCoffee

  });

});


/* START SERVER */

app.listen(PORT,()=>{

  console.log(`Server running on port ${PORT}`);

});