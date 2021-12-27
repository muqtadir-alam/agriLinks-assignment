import axios from 'axios';
import Swal from 'sweetalert2';

import { GET_REPORTS } from '../actionType/ActionType';

const url = 'http://localhost:4000/api/v1';

export const CreatReport = data => dispatch => {
	try {
		axios

			.post(url + '/reports', data)

			.then(res => {
				console.log('response', res.data.response);

				Swal.fire({
					title: 'Report Created',
					icon: 'success',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				});

				window.location.href = '#/OtpVerification';
			})
			.catch(err => {
				console.log(err);
				Swal.fire({
					title: 'Fail to Creat report',
					icon: 'error',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				});
			});
	} catch (err) {
		Swal.fire('Incorrect Credentials', '', 'error');
	}
};

export const getReports = data => dispatch => {
	const params = new URLSearchParams({
		cmdtyID: data,
	}).toString();

	axios
		.get(data ? url + '/reports?' + params : url + '/reports')
		.then(res => {
			dispatch({
				type: GET_REPORTS,
				payload: res.data.data,
			});
			console.log(res);
		})
		.catch(err => console.log(err));
};
