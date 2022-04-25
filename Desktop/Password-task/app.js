import express from "express"
import { connection } from "./Models/connection.js"
import { Pass } from "./Models/encrypt.js"
import { Value, Insert } from "./Models/login.js"
const app=express()
const port=3012

app.use(express.urlencoded({extended:true}))
app.use(express.json())

connection
  .authenticate()
  .then(() => {
    console.log("");
    console.log(`Database Authenticated`);
    connection.sync({force:false});
    console.log("");
  })

  .catch((error) => {
    console.log(`Database Authentication Error`);
  });

  app.post("/insert",Insert)

app.listen(port,()=>{
    console.log("Port listening on ",port);
})