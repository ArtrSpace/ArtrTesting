import express from "express";
import { json } from "express";
import mongoose from "mongoose"
import db_Model from "./database/dbSchema.js";
import cors from "cors"
const app=express()
const PORT=process.env.PORT || 3030;
const DB_URI="mongodb://uri/database name"


// express confihurations
app.use(cors())
app.use(express.json())

try {
	mongoose.connect(DB_URI)
		.then((db) => {
			console.log('Mongoose connection Established')
			db.connection.on('error', (err) => { console.error("error in connecting to db") }) // <- print nothing
			db.connection.on('disconnected', () => { console.log('disconnected from db') }) // <- print once
			db.connection.on('reconnected', () => { console.log('reconnected to db') }) // <- never printed
		})
} catch (error) {
	console.error(error.message)
	console.log('Mongoose connection Failed')
	process.exit(1)
}

// write code for your endpoints here
app.get("/",async(req,res)=>{
    res.send("You have sent a get request to '/'")
    //write your code here

    // simple db operation
})


app.listen(PORT,()=>{
    console.log(`server listening at http://localhost:`+PORT)
})