const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	img_url:String,
	content: String,
})

module.exports = mongoose.model("template_db", schema)