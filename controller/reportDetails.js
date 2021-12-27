const reportDetailsModel = require('../model/reportDetails');

module.exports = {
	addReports: async (req, res) => {
		try {
			const {
				userID,
				marketID,
				marketName,
				cmdtyID,
				convFctr,
				minPrice,
				maxPrice,
				marketType,
				cmdtyName,
			} = req.body;
			let newPriceUnit = 'KG';
			let newMinPrice = Number(minPrice / convFctr);
			let newMaxPrice = Number(maxPrice / convFctr);
			const obj = {
				userID,
				marketID,
				marketName,
				cmdtyID,
				convFctr,
				minPrice: newMinPrice,
				maxPrice: newMaxPrice,
				marketType,
				cmdtyName,
				priceUnit: newPriceUnit,
			};
			const reportData = await reportDetailsModel.create(obj);
			if (reportData) {
				return res
					.status(201)
					.json({ status: 'success', reportID: reportData._id });
			} else {
				return res.status(400).json({ status: 'something went wrong' });
			}
		} catch (error) {
			return res.status(500).json({ status: 'Server error' });
		}
	},
	getReports: async (req, res) => {
		try {
			const { cmdtyID } = req.query;
			const agr = [
				{
					$group: {
						_id: {
							cmdtyID: cmdtyID,
						},
						cmdtyName: {
							$first: '$cmdtyName',
						},
						cmdtyID: {
							$first: '$cmdtyID',
						},
						marketID: {
							$first: '$marketID',
						},
						marketName: {
							$first: '$marketName',
						},
						priceUnit: {
							$first: '$priceUnit',
						},
						maxPrice: {
							$avg: '$maxPrice',
						},
						minPrice: {
							$avg: '$minPrice',
						},
						users: {
							$push: '$userID',
						},
					},
				},
				{
					$addFields: {
						timeSatmps: Date.now(),
					},
				},
			];

			if (cmdtyID) {
				const reportData = await reportDetailsModel.aggregate(agr);
				return res.status(200).json({ status: 'success', data: reportData });
			} else {
				const data = await reportDetailsModel.find();
				return res.status(200).json({ status: 'success', data: data });
			}
		} catch (error) {
			return res.status(500).json({ status: 'Server error' });
		}
	},
};
