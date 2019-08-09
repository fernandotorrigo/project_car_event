const mongoose = require("mongoose");

const Contact = mongoose.model("Contact");

module.exports = {
    async index(req, res) {
        const contacts = await Contact.find();
        return res.json(contacts);
    },
};