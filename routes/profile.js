const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const profileController = require("../controllers/profiles.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});
 
// show Route
 router.get("/:name",  
 wrapAsync(profileController.showProfile));

module.exports = router;