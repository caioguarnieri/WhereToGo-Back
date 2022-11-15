import dbConection from "../src/db.js";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Modelos de usuario

const userProfile = new Schema ({
    name : String,
    email: String,
    nacionalidade : String,
    active : Boolean  
})

const userCredentials = new Schema ({
    profileID: String,
    username : String,
    password : String
})

const trip = new Schema ({
    profileID : String,
    Title : String,
    Description : String,
    Date_inicial : String,
    Date_final : String,
    Budget : Number,
})

const tripStep = new Schema ({
    profileID: String,
    tripID: String,
    Destin : String,
    Longitude : String,
    Latitude : String,
    Description : String, 
    Budget : Number,
    Date_inicial : Date,
    Date_final : Date,
    Step_status : String

})






const user = mongoose.model ('wheretogo', userProfile)







export default user;