const mongoose = require('mongoose');

const reportDetailsScheam = mongoose.Schema(
	{
		userID: {
			type: String,
		},
		marketID: {
			type: String,
		},
		marketName: {
			type: String,
		},
		cmdtyID: {
			type: String,
		},
		convFctr: {
			type: Number,
		},
		minPrice: {
			type: Number,
		},
		maxPrice: {
			type: Number,
		},
		marketType: {
			type: String,
		},
		cmdtyName: {
			type: String,
		},
		priceUnit: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Reports', reportDetailsScheam);
