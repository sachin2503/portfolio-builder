if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/ExpressError.js");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const wrapAsync = require("./utils/wrapAsync.js");
const Profile = require("./models/profile");
const profileController = require("./controllers/profiles.js");
const multer = require("multer");
const {storage} = require("./cloudConfig.js");
const upload = multer({storage});

// const MONGO_URL = 'mongodb://127.0.0.1:27017/portfollio';
const dbUrl = process.env.ATLASDB_URL;
main()
.then( () =>{
    console.log("success2");
}) 
.catch((err) =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(dbUrl);
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method")); 
app.use(express.static(path.join(__dirname, "/public")));

app.engine("ejs", ejsMate); 

app.use(flash());

app.get("/",
    profileController.renderNewForm)

app.post("/link",upload.single('profile[image]'), async(req, res) => {
    const newProfile = new Profile(req.body.profile); 
    let url = req.file.path;
    let filename = req.file.filename;
    newProfile.image = {url, filename};
    const title = newProfile.name;
    await newProfile.save();
    res.render("link.ejs", {title});
})

app.get("/:name",  
    wrapAsync(profileController.showProfile));

app.listen("3000", () =>{
    console.log("major project server started at 8080");
    console.log(dbUrl);
});