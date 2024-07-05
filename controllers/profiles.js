const Profile = require("../models/profile");
const flash = require("connect-flash");
module.exports.showProfile = async (req, res) => {
    const name1 = req.params.name ;
    const profile = await Profile.findOne({name: name1});

    if(!profile){
        res.render("./errorPage.ejs");
    }
    res.render("../portfollio.ejs", {profile});  
}

module.exports.renderNewForm = (req, res) =>{
    res.render("../main.ejs")
};

module.exports.createProfile = async (req, res, next) => {
    // let url = req.file.path;
    // let filename = req.file.filename;
    // const newProfile = new Profile(req.body.profile); 
    // newProfile.image = {url, filename};
    // await newProfile.save();

    let list = req.body;
    console.log(list);
    res.send("Created");
    // res.redirect("/listings");   
}
