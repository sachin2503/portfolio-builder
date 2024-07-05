const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        image:{
            // type: String,
            url: String,
            filename: String,
        },
        briefSummery:{
            type: String,
            required: true,
        },
        skill_1:{
            type: String,
            required: true,
        },
        skill_2:{
            type: String,
            required: true,
        },
        skill_3:{
            type: String,
            required: true,
        },
        skill_4:{
            type: String,
            required: true,
        },
        skill_5:{
            type: String,
            required: true,
        },
        serviceTitle_1:{
            type: String,
            required: true,
        },
        serviceDescription_1:{
            type: String,
            required: true,
        },
        serviceTitle_2:{
            type: String,
            required: true,
        },
        serviceDescription_2:{
            type: String,
            required: true,
        },
        serviceTitle_3:{
            type: String,
            required: true,
        },
        serviceDescription_3:{
            type: String,
            required: true,
        },
        projectTitle_1:{
            type: String,
            required: true,
        },
        projectDescription_1:{
            type: String,
            required: true,
        },
        projectTitle_2:{
            type: String,
            required: true,
        },
        projectDescription_2:{
            type: String,
            required: true,
        },
        projectTitle_3:{
            type: String,
            required: true,
        },
        projectDescription_3:{
            type: String,
            required: true,
        },
    }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;