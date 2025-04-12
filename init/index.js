const mongoose = require("mongoose");
const initData = require("./data");
const listing = require("../models/listings.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/hostels';
Main().then(()=>{
    console.log("connection made");
}).catch(err =>{
    console.log(err);
})
async function Main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
        await listing.deleteMany({});
        await listing.insertMany(initData.data);
        console.log("data was initialized");

}

initDB();