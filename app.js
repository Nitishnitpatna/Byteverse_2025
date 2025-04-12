const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js")
const expressError = require("./utils/ExpressError.js");
// const { mainModule } = require("process");
app.use(methodOverride("_method"))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate);
app.use(express.urlencoded({extended:true}));


main().then(()=>{
    console.log("connection made");
}).catch(err=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hostels');
}

app.get("/",(req,res)=>{
    res.render("intro.ejs")
})
app.get("/listings", async (req,res)=>{
    const hostels = await Listing.find()
    res.render("listings/index.ejs",{hostels})
    // res.render("listings/index");
})

// Create new
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listings = await Listing.findById(id);
    res.render("listings/show.ejs",{listings});
}));

app.post("/listings",wrapAsync(async(req,res,next)=>{
    let {title,description,image,price,location,country} = req.body; // WAY FIRST:
    await Listing.insertOne({
    title:title,
    description:description,
    image:image,
    price:price,
    location:location,
    country:country
});
// console.log(req.body);
res.redirect("/listings");
// res.send("I'm checking");

}));

// 
//// Update &  edit
app.get("/listings/:id/edit",wrapAsync(async(req,res)=>{
let {id} = req.params;
let listings = await Listing.findById(id);
res.render("listings/edit.ejs",{listings});
}));
app.put("/listings/:id", wrapAsync(async(req,res)=>{
let {id} = req.params;
await Listing.findByIdAndUpdate(id,{...req.body.listings});
res.redirect(`/listings/${id}`);
}));

// Delete
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
let {id} = req.params;
let deletedData = await Listing.findByIdAndDelete(id);

res.redirect('/listings');
}));

app.get("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
})

app.use((err,req,res,next)=>{
    let {status = 500, message = "Something went wrong"} = err;
    res.render("error.ejs",{message});
})

app.listen("3000",()=>{
    console.log("Server is running at port no 3000")
})