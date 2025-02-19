const mongoose=require('mongoose');

const urlSchema =new mongoose.Schema({
	shortId:{
		type: String,
		requird: true,
		unique: true
	},
	redirectURL:{
		type: String,
		requird: true,
	},
	visitHistory:[{ timestamp:{type: Number}}]
},
{timestamps: true}
);
const URL=mongoose.model('url', urlSchema);

module.exports=URL;