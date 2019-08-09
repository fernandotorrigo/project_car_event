const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
    nameEvent:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    dateTimeEvent:{
        type: Date,
        required: true,
    },
    details:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Schedule', ScheduleSchema);