import mongoose from "mongoose";
const Collection_Name="new collection to be created"

const userSchema = new mongoose.Schema({
    // Write your schema here
    db_username:String,
    db_password:String
});


const db_Model = mongoose.model(Collection_Name,userSchema);

export default db_Model;