import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatReport, getReports } from './Redux/actions/Actions';
import { useState, useEffect } from 'react';
export const GetReport = () => {
	const home = useSelector(state => state.home);
	const reportsList = home.reportsList;

	const [Quiry, setQuiry] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		if (Quiry && Quiry !== 'null') {
			dispatch(getReports(Quiry));
		} else {
			dispatch(getReports());
		}
	}, [Quiry]);
	return (
		<>
			<center>
				<h1 style={{ color: '#e83e8c' }}> get all reports </h1>

				<select
					class='form-select mt-4'
					aria-label='Filter'
					onChange={e => setQuiry(e.target.value)}>
					<option value='null'>Filter Your Data</option>
					<option value='cmdty-1'>cmdty-1</option>
				</select>

				<div className=' w-75'>
					{reportsList &&
						reportsList.map(item => {
							return (
								// <center>
								<div className='card m-3 col-sm-6 text-left bg-success'>
									<div class='card-body'>
										<h5 class='card-title'></h5>
										<h6 class='card-subtitle mb-2 text-muted'></h6>
										<p class='card-text'>
											<b> 1. Cmdt Name :</b> {item.cmdtyName} <br />
											<b> 2. minPrice-maxPrice/priceUnit :</b>{' '}
											{item.minPrice.toFixed(2)}-{item.maxPrice.toFixed(2)}/1kg{' '}
											<br />
											<b>3. Market Name :</b> {item.marketName} <br />
											<b> 4. userId :</b> {item.userID || item.users[1]} <br />
										</p>
									</div>
								</div>
								// </center>
							);
						})}
				</div>
			</center>
		</>
	);
};
